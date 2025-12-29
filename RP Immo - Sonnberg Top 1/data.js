var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway---living",
      "name": "Hallway - Living",
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
        "yaw": 2.8449007037665215,
        "pitch": 0.1525894407845847,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.252770187892236,
          "pitch": 0.48456640043522725,
          "rotation": 0,
          "target": "2-living-area"
        },
        {
          "yaw": 0.717423976926522,
          "pitch": 0.3607022379094289,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 1.3395765927654093,
          "pitch": 0.33229284271384785,
          "rotation": 0,
          "target": "1-dinning"
        },
        {
          "yaw": -1.0536727711210645,
          "pitch": 0.3697180478379174,
          "rotation": 0,
          "target": "5-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dinning",
      "name": "Dinning",
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
        "yaw": 1.0101893944706077,
        "pitch": 0.1551082765203482,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.867022608806428,
          "pitch": 0.2999359786220328,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": -0.916697645379914,
          "pitch": 0.5746560567584869,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.490475280705631,
          "pitch": 0.46317143361833146,
          "rotation": 5.497787143782138,
          "target": "2-living-area"
        },
        {
          "yaw": -1.645071106991125,
          "pitch": 0.3744520637160189,
          "rotation": 6.283185307179586,
          "target": "0-hallway---living"
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
        "yaw": 2.3169464260577275,
        "pitch": 0.2510881251710373,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.0284206725458596,
          "pitch": 0.39685233613405124,
          "rotation": 0,
          "target": "0-hallway---living"
        },
        {
          "yaw": 0.0771629180508473,
          "pitch": 0.4087559050162657,
          "rotation": 6.283185307179586,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.6092577142797957,
          "pitch": 0.4747882961468939,
          "rotation": 0.7853981633974483,
          "target": "1-dinning"
        },
        {
          "yaw": 1.3585156381133068,
          "pitch": 0.16347098216178502,
          "rotation": 0,
          "target": "4-terrace"
        }
      ],
      "infoHotspots": []
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
        "yaw": 0.6643506991142516,
        "pitch": 0.11722184451943107,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.0693081604377905,
          "pitch": 0.1921901928323244,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": -2.991378917210749,
          "pitch": 0.3911978807948717,
          "rotation": 5.497787143782138,
          "target": "2-living-area"
        },
        {
          "yaw": -2.3974071967473236,
          "pitch": 0.44014388281759764,
          "rotation": 0.7853981633974483,
          "target": "0-hallway---living"
        },
        {
          "yaw": 2.493694780839241,
          "pitch": 0.6123770876125185,
          "rotation": 5.497787143782138,
          "target": "1-dinning"
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
        "yaw": 3.0704660928019774,
        "pitch": 0.23845747125836425,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.2821482719340693,
          "pitch": 0.362581356879085,
          "rotation": 2.356194490192345,
          "target": "1-dinning"
        },
        {
          "yaw": -1.4650692953669502,
          "pitch": 0.13278539902762887,
          "rotation": 0.7853981633974483,
          "target": "0-hallway---living"
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
        "yaw": -2.142406901053427,
        "pitch": 0.26393739725694054,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.2919484156148684,
          "pitch": 0.3125284243861248,
          "rotation": 0,
          "target": "0-hallway---living"
        },
        {
          "yaw": -0.9625016435281122,
          "pitch": 0.08512721135226542,
          "rotation": 0,
          "target": "8-bedroom-1"
        },
        {
          "yaw": -0.8266137856451348,
          "pitch": 0.3930228642784055,
          "rotation": 1.5707963267948966,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
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
        "yaw": -2.073297556335387,
        "pitch": -0.002594278232129099,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.628492726539271,
          "pitch": 0.5048616287721419,
          "rotation": 5.497787143782138,
          "target": "5-entrance"
        },
        {
          "yaw": -2.3100729214495637,
          "pitch": 0.5083331303990963,
          "rotation": 0.7853981633974483,
          "target": "8-bedroom-1"
        },
        {
          "yaw": 0.1058467574072246,
          "pitch": 0.3058637187511817,
          "rotation": 5.497787143782138,
          "target": "9-bedroom-2"
        },
        {
          "yaw": 1.2181981727373117,
          "pitch": 0.31651011777246296,
          "rotation": 0.7853981633974483,
          "target": "10-hallway---wardrobe"
        },
        {
          "yaw": -2.872162206686216,
          "pitch": 0.27850278791707694,
          "rotation": 5.497787143782138,
          "target": "7-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom",
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
        "yaw": 2.2004495701964286,
        "pitch": 0.13738857982668762,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.8096887247981854,
          "pitch": 0.233239140791083,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom-1",
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
        "yaw": 0.014519507582059887,
        "pitch": 0.23868515996938733,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.471053434853655,
          "pitch": 0.25327077731104986,
          "rotation": 0,
          "target": "6-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-2",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1337039413277417,
          "pitch": 0.16917558327381066,
          "rotation": 5.497787143782138,
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
        "yaw": 0.06111659991047702,
        "pitch": 0.08759469236326112,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9457562874907843,
          "pitch": 0.1259489769061588,
          "rotation": 0,
          "target": "6-hallway"
        },
        {
          "yaw": -0.7427066755430687,
          "pitch": 0.2177262644514606,
          "rotation": 0.7853981633974483,
          "target": "12-master-bathroom"
        },
        {
          "yaw": 2.254623195717187,
          "pitch": 0.30987473764363216,
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
        "yaw": 1.5263171073317805,
        "pitch": 0.170921802727662,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.2290882416179763,
          "pitch": 0.24899854310026726,
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
        "yaw": 2.730569867654637,
        "pitch": 0.3906694569140221,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.4811946402507683,
          "pitch": 0.1550205371413078,
          "rotation": 0,
          "target": "10-hallway---wardrobe"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RP Immo - Sonnberg Top 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
