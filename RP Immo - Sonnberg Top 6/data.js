var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway---dinning",
      "name": "Hallway - Dinning",
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
        "yaw": 2.144818308367533,
        "pitch": 0.192358370516299,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.223620461985016,
          "pitch": 0.3745980581363799,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": 0.7110195616404216,
          "pitch": 0.19726973859949126,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.1486245911381285,
          "pitch": 0.18588695323031423,
          "rotation": 3.141592653589793,
          "target": "2-dinning---kitchen"
        },
        {
          "yaw": -0.9278702235712153,
          "pitch": 0.3391837357541121,
          "rotation": 0,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living room",
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
        "yaw": 0.22872803312085033,
        "pitch": 0.3618093382019829,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9406743192140752,
          "pitch": 0.28883174741605266,
          "rotation": 0,
          "target": "0-hallway---dinning"
        },
        {
          "yaw": 0.7364656684848079,
          "pitch": 0.11118913461001156,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": 0.12656699612707456,
          "pitch": 0.17371142447129095,
          "rotation": 3.9269908169872414,
          "target": "2-dinning---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning---kitchen",
      "name": "Dinning - Kitchen",
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
        "yaw": -1.3968649519319971,
        "pitch": 0.3199970048712899,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.4105367172432715,
          "pitch": 0.5968597773634521,
          "rotation": 0.7853981633974483,
          "target": "4-terrace"
        },
        {
          "yaw": -0.6757839954978646,
          "pitch": 0.5892275367063515,
          "rotation": 7.0685834705770345,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.631427997307874,
          "pitch": 0.16572182132799007,
          "rotation": 3.141592653589793,
          "target": "0-hallway---dinning"
        },
        {
          "yaw": -2.5258122941430443,
          "pitch": 0.35967842979281706,
          "rotation": 10.995574287564278,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.275100935363195,
          "pitch": 0.13340310455487803,
          "title": "Wirtschaftsraum",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-kitchen",
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
        "yaw": -2.481359967059614,
        "pitch": 0.10141380004396083,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.61964541111392,
          "pitch": 0.5112396463453734,
          "rotation": 5.497787143782138,
          "target": "2-dinning---kitchen"
        },
        {
          "yaw": 2.5902117374854523,
          "pitch": 0.27381674741471684,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": -2.335964544601765,
          "pitch": 0.2550098334645625,
          "rotation": 0.7853981633974483,
          "target": "0-hallway---dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrace",
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
        "yaw": 0.02840433004179843,
        "pitch": 0.2830067566762722,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.0514573987966678,
          "pitch": 0.7213863324247356,
          "rotation": 5.497787143782138,
          "target": "2-dinning---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance",
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
        "yaw": -1.5722858721212685,
        "pitch": 0.09288439200158294,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.274929743503572,
          "pitch": 0.34306472841639923,
          "rotation": 0,
          "target": "0-hallway---dinning"
        },
        {
          "yaw": -0.9592018506418505,
          "pitch": 0.36972227621978604,
          "rotation": 7.0685834705770345,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0337759060716865,
          "pitch": 0.6410138113080883,
          "title": "WC",
          "text": "<br>"
        },
        {
          "yaw": 1.3491691009271456,
          "pitch": 1.2313418343251499,
          "title": "AR",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "6-hallway",
      "name": "Hallway",
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
        "yaw": 0.6427826120982161,
        "pitch": 0.06795253862754791,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.8029014384992266,
          "pitch": 0.37203426642815884,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-1"
        },
        {
          "yaw": 0.09254636095699809,
          "pitch": 0.266406203975988,
          "rotation": 5.497787143782138,
          "target": "8-bedroom-2"
        },
        {
          "yaw": 1.1416362981428563,
          "pitch": 0.34153941279041966,
          "rotation": 0.7853981633974483,
          "target": "10-hallway---wardrobe"
        },
        {
          "yaw": -2.9732565431341555,
          "pitch": 0.4047738967616521,
          "rotation": 5.497787143782138,
          "target": "9-bathroom"
        },
        {
          "yaw": -2.4653028841216447,
          "pitch": 0.5231586209425085,
          "rotation": 5.497787143782138,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-1",
      "name": "Bedroom 1",
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
        "yaw": -2.8979819068907275,
        "pitch": 0.4083397132812898,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.9629469201011966,
          "pitch": 0.17498645238613975,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-2",
      "name": "Bedroom 2",
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
        "yaw": 1.4176021957130054,
        "pitch": 0.36869031569727184,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -3.137934126021099,
          "pitch": 0.15919024806793125,
          "rotation": 5.497787143782138,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom",
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
        "yaw": 2.2530602530140467,
        "pitch": 0.2851063146162147,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.8105468701800724,
          "pitch": 0.23860484243189362,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hallway---wardrobe",
      "name": "Hallway - Wardrobe",
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
        "yaw": 0.10393252058060654,
        "pitch": 0.13767732324737736,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9475007839508862,
          "pitch": 0.11519210032061267,
          "rotation": 0,
          "target": "6-hallway"
        },
        {
          "yaw": -0.7466910367675403,
          "pitch": 0.23472698594892272,
          "rotation": 7.0685834705770345,
          "target": "12-master-bathroom"
        },
        {
          "yaw": 2.263436843796792,
          "pitch": 0.28399745747548266,
          "rotation": 0,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom",
      "name": "Master bedroom",
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
        "yaw": 1.6180236891347919,
        "pitch": 0.20580261261466326,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.2858584318566386,
          "pitch": 0.19349620493660424,
          "rotation": 0,
          "target": "10-hallway---wardrobe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bathroom",
      "name": "Master bathroom",
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
        "yaw": 2.8314377066290444,
        "pitch": 0.2538719247401886,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.488370938753473,
          "pitch": 0.1453466094988176,
          "rotation": 0,
          "target": "10-hallway---wardrobe"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RP Immo - Sonnberg Top 6",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
