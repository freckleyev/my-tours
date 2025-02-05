var APP_DATA = {
  "scenes": [
    {
      "id": "0-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6860486521300775,
        "pitch": 0.029429667492705036,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -0.8369319405738214,
          "pitch": 0.2865221935481692,
          "rotation": 5.497787143782138,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.2123862831177803,
        "pitch": 0.292464655469864,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -2.5521850861620674,
          "pitch": 0.11292805933522843,
          "rotation": 0,
          "target": "0-terrace"
        },
        {
          "yaw": 1.3036390576643875,
          "pitch": 0.0573045038514266,
          "rotation": 0,
          "target": "0-terrace"
        },
        {
          "yaw": -1.1581756422823677,
          "pitch": 0.01081194820416087,
          "rotation": 0,
          "target": "2-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-area",
      "name": "Living area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.237857331018665,
        "pitch": 0.1736257619965862,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 2.7802292960255564,
          "pitch": 0.2756590239393404,
          "rotation": 0,
          "target": "0-terrace"
        },
        {
          "yaw": 1.7597300066823074,
          "pitch": 0.03703228447201923,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
