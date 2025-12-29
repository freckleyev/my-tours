var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.625254625430644,
          "pitch": 0.25477970526806537,
          "rotation": 5.497787143782138,
          "target": "1-guest-parkings"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-guest-parkings",
      "name": "Guest parkings",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33195056710296456,
          "pitch": 0.2704937014772213,
          "rotation": 6.283185307179586,
          "target": "0-entrance"
        },
        {
          "yaw": 2.17648180168895,
          "pitch": 0.16847203731656357,
          "rotation": 0,
          "target": "2-gate-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gate-4",
      "name": "Gate 4",
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
        "yaw": -1.6305701402227708,
        "pitch": 0.012216903255662714,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9631928061254289,
          "pitch": 0.23703276541082552,
          "rotation": 0,
          "target": "1-guest-parkings"
        },
        {
          "yaw": -0.7705657584132073,
          "pitch": 0.01213760217011739,
          "rotation": 1.5707963267948966,
          "target": "0-entrance"
        },
        {
          "yaw": 0.6921346199290657,
          "pitch": 0.26204645123140224,
          "rotation": 0,
          "target": "3-gate-2"
        },
        {
          "yaw": -2.52023496772655,
          "pitch": 0.17179822930473776,
          "rotation": 0,
          "target": "5-gate-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gate-2",
      "name": "Gate 2",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5877657402376997,
          "pitch": 0.2639449881841269,
          "rotation": 0,
          "target": "2-gate-4"
        },
        {
          "yaw": -2.1927487929562766,
          "pitch": 0.02830595431648142,
          "rotation": 1.5707963267948966,
          "target": "1-guest-parkings"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gate-1",
      "name": "Gate 1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6441505501897691,
          "pitch": 0.3076130010661,
          "rotation": 0,
          "target": "2-gate-4"
        },
        {
          "yaw": 0.19306452813462194,
          "pitch": 0.0348510973583771,
          "rotation": 4.71238898038469,
          "target": "1-guest-parkings"
        },
        {
          "yaw": -2.478433513740688,
          "pitch": 0.3068136391859859,
          "rotation": 0,
          "target": "5-gate-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gate-8",
      "name": "Gate 8",
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
        "yaw": 0.9438147188888912,
        "pitch": 0.2040189198047262,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.6459556589016344,
          "pitch": 0.21928610873323962,
          "rotation": 0,
          "target": "4-gate-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sonnberg - Garage",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
