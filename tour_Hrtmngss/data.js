var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living-room",
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
        "yaw": 0.5477648729336089,
        "pitch": 0.3144176053100267,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -1.226615750860475,
          "pitch": 0.32270465700689144,
          "rotation": 6.283185307179586,
          "target": "2-kitchen"
        },
        {
          "yaw": -0.24589573642497697,
          "pitch": 0.12847972879162484,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
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
        "yaw": 0.606839793628458,
        "pitch": 0.3603850914664406,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -2.9904785466559822,
          "pitch": 0.4396590812861234,
          "rotation": 4.71238898038469,
          "target": "0-living-room"
        },
        {
          "yaw": -2.539919419032211,
          "pitch": 0.3936904790477467,
          "rotation": 1.5707963267948966,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
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
        "yaw": -1.5717340658672967,
        "pitch": 0.3820583105703079,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 1.6540141806850395,
          "pitch": 0.38005056918358093,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 0.751487054451788,
          "pitch": 0.09250209069817217,
          "rotation": 0,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
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
        "yaw": 1.7638120185850692,
        "pitch": 0.4456521288808517,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -2.5531577368348586,
          "pitch": 0.6957335552312784,
          "rotation": 6.283185307179586,
          "target": "2-kitchen"
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
