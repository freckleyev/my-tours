'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var deviceOrientationToggleElement = document.querySelector('#deviceOrientationToggle');
  var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
  var deviceOrientationEnabled = false;

    if (deviceOrientationToggleElement) {
        deviceOrientationToggleElement.addEventListener('click', function () {
            // If already enabled, just turn it off
            if (deviceOrientationEnabled) {
                viewer.controls().unregisterMethod('deviceOrientation');
                deviceOrientationToggleElement.classList.remove('enabled');
                deviceOrientationEnabled = false;
                return;
            }

            // Attempt to enable
            // This helper handles the iOS 13+ permission popup requirement
            deviceOrientationControlMethod.getPermission(function (err) {
                if (err) {
                    // If this alert shows up, the browser blocked the request 
                    // or the user denied it previously.
                    alert("Orientation Error: " + err);
                    return;
                }

                // Success! Register the control method
                viewer.controls().registerMethod('deviceOrientation', deviceOrientationControlMethod);
                deviceOrientationToggleElement.classList.add('enabled');
                deviceOrientationEnabled = true;

                // Optional: Turn off autorotate if it's on to avoid control fighting
                if (typeof stopAutorotate === "function") stopAutorotate();
            });
        });
    }

  // [NEW] Toggle elements and Global State
  var toggleLayerElement = document.querySelector('#toggleLayer');
  var isEmptyMode = false;

  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  var viewerOpts = {
    controls: { mouseViewMode: data.settings.mouseViewMode }
  };

  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes: Two Marzipano scenes per entry (Furnished & Empty)
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var geometry = new Marzipano.CubeGeometry(data.levels);
    var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180, 120*Math.PI/180);
    
    // Both versions SHARE the same view object to stay synchronized
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    // 1. Create Furnished Scene
    var furnishedSource = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    
    var furnishedScene = viewer.createScene({
      source: furnishedSource,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // 2. Create Empty Scene (if defined in data.js)
    var emptyScene = null;
    if (data.overlay) {
      var emptySource = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + data.overlay.id + "/{z}/{f}/{y}/{x}.jpg",
        { cubeMapPreviewUrl: urlPrefix + "/" + data.overlay.id + "/preview.jpg" });
      
      emptyScene = viewer.createScene({
        source: emptySource,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
      });
    }

    // Hotspot setup helper
    var setupHotspots = function(s) {
      data.linkHotspots.forEach(function(hotspot) {
        var element = createLinkHotspotElement(hotspot);
        s.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
      data.infoHotspots.forEach(function(hotspot) {
        var element = createInfoHotspotElement(hotspot);
        s.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });
    };

    setupHotspots(furnishedScene);
    if (emptyScene) setupHotspots(emptyScene);

    return {
      data: data,
      furnishedScene: furnishedScene,
      emptyScene: emptyScene,
      view: view
    };
  });

  // [NEW] Global Toggle Button Logic
  if (toggleLayerElement) {
    toggleLayerElement.addEventListener('click', function() {
      isEmptyMode = !isEmptyMode;
      toggleLayerElement.classList.toggle('visible', isEmptyMode);

      // Identify the current room we are in
      var currentSceneData = scenes.find(function(s) {
        return s.furnishedScene === viewer.scene() || s.emptyScene === viewer.scene();
      });

      if (currentSceneData && currentSceneData.emptyScene) {
        var targetScene = isEmptyMode ? currentSceneData.emptyScene : currentSceneData.furnishedScene;
        
        // Use a 1000ms cross-fade transition between the two scenes
        targetScene.switchTo({ transitionDuration: 1000 });
      }
    });
  }

  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  sceneListToggleElement.addEventListener('click', toggleSceneList);

  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    if (el) {
      el.addEventListener('click', function() {
        switchScene(scene);
        if (document.body.classList.contains('mobile')) {
          hideSceneList();
        }
      });
    }
  });

  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  var velocity = 0.7;
  var friction = 3;

  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(sceneData, customView) {
    stopAutorotate();

    // Select correct version based on global preference
    var sceneToShow = (isEmptyMode && sceneData.emptyScene) ? sceneData.emptyScene : sceneData.furnishedScene;

    if (customView) {
      sceneData.view.setParameters(customView);
    } else {
      sceneData.view.setParameters(sceneData.data.initialViewParameters);
    }

    // Switch between rooms with standard 500ms transition
    sceneToShow.switchTo({ transitionDuration: 500 });

    updateSceneName(sceneData);
    updateSceneList(sceneData);
  }

  function updateSceneName(sceneData) {
    sceneNameElement.innerHTML = sanitize(sceneData.data.name);
  }

  function updateSceneList(sceneData) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === sceneData.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    var icon = document.createElement('img');
    icon.src = '../Main/img/link.png';
    icon.classList.add('link-hotspot-icon');

    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    wrapper.addEventListener('click', function () {
      var targetSceneData = findSceneById(hotspot.target);
      var currentView = viewer.view();
      
      switchScene(targetSceneData, {
        yaw: currentView.yaw(),
        pitch: currentView.pitch(),
        fov: currentView.fov()
      });
    });

    stopTouchAndScrollEventPropagation(wrapper);

    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = '../Main/img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = '../Main/img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    wrapper.appendChild(header);
    wrapper.appendChild(text);

    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);

})();