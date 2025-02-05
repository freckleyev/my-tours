var APP_DATA = {
  "scenes": [
    {
      "id": "0-logia-open",
      "name": "Logia (open)",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9539017760600039,
        "pitch": 0.26670772211199534,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -0.249751411176236,
          "pitch": -0.16386049847175244,
          "rotation": 0,
          "target": "1-logia-closed"
        },
        {
          "yaw": 2.6626511661218952,
          "pitch": 0.7435516679029419,
          "rotation": 6.283185307179586,
          "target": "12-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-logia-closed",
      "name": "Logia (closed)",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.8245753672493326,
        "pitch": 0.3600507824762147,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -0.23957259870038072,
          "pitch": -0.08821396565973671,
          "rotation": 0,
          "target": "0-logia-open"
        },
        {
          "yaw": 2.6343283871676038,
          "pitch": 0.7484347448270814,
          "rotation": 0,
          "target": "13-living-area-shades"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.7903992191185338,
        "pitch": 0.1368148179672879,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 1.5985182050710707,
          "pitch": 0.2709932862913096,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": 1.4184889267469458,
          "pitch": 0.4885989580362491,
          "rotation": 5.497787143782138,
          "target": "15-wc"
        },
        {
          "yaw": -0.4989237683730856,
          "pitch": 0.6563816162105418,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.4293843211492288,
        "pitch": 0.24680290970647079,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -1.57004255973159,
          "pitch": 0.2641524453503621,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": -1.3825655553644935,
          "pitch": 0.41725415394515686,
          "rotation": 0.7853981633974483,
          "target": "15-wc"
        },
        {
          "yaw": 0.4584938664210352,
          "pitch": 0.47525892343808707,
          "rotation": 0,
          "target": "6-bedroom"
        },
        {
          "yaw": 1.4051209644061728,
          "pitch": 0.15931472512770917,
          "rotation": 0,
          "target": "14-ar"
        },
        {
          "yaw": 3.097218111999446,
          "pitch": 0.566080127048977,
          "rotation": 0,
          "target": "9-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.242180433692347,
        "pitch": 0.14496227773353887,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 2.8039185658180124,
          "pitch": 0.07017796444391067,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": 1.5858932804038623,
          "pitch": 0.40701248418731417,
          "rotation": 0,
          "target": "5-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bathroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.12144308706187,
        "pitch": 0.39644443130041296,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -1.6543802200499833,
          "pitch": 0.49344605352916204,
          "rotation": 0,
          "target": "4-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.443337941388892,
        "pitch": 0.16930923995961145,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 3.121663811404895,
          "pitch": 0.06424152911337089,
          "rotation": 0,
          "target": "3-hallway"
        },
        {
          "yaw": -1.3988260033897681,
          "pitch": 0.6053179700625151,
          "rotation": 0,
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.23772614784,
        "pitch": 0.4388070326340845,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -2.921773447048995,
          "pitch": 0.1643356495790691,
          "rotation": 0,
          "target": "8-shower"
        },
        {
          "yaw": 1.4450654087928836,
          "pitch": 0.48526837945564516,
          "rotation": 0,
          "target": "6-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-shower",
      "name": "Shower",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9072050580471345,
        "pitch": 0.15127481807844134,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 0.09082184712215735,
          "pitch": 0.7345507561145617,
          "rotation": 0,
          "target": "7-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dinning-area",
      "name": "Dinning area",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.798375498942872,
        "pitch": 0.06633758148738167,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -3.063794572638681,
          "pitch": 0.5002574544823659,
          "rotation": 0,
          "target": "10-dinning-area---kitchen"
        },
        {
          "yaw": -2.8256445160742274,
          "pitch": 0.36957249749148247,
          "rotation": 7.0685834705770345,
          "target": "11-kitchen"
        },
        {
          "yaw": 3.0302170812978977,
          "pitch": 0.23026233455926537,
          "rotation": 0,
          "target": "12-living-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dinning-area---kitchen",
      "name": "Dinning area - Kitchen",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.7829315793300644,
        "pitch": 0.06870190741689441,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -3.0651029902395877,
          "pitch": 0.558696261257019,
          "rotation": 0,
          "target": "12-living-area"
        },
        {
          "yaw": 3.1373978348192777,
          "pitch": 0.04520399202328562,
          "rotation": 0,
          "target": "0-logia-open"
        },
        {
          "yaw": -0.1042841012321265,
          "pitch": 0.38980154400512923,
          "rotation": 0,
          "target": "9-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-kitchen",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.226063141591675,
        "pitch": 0.1414784083737537,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": 2.3363220954884465,
          "pitch": 0.4625671187626228,
          "rotation": 0.7853981633974483,
          "target": "12-living-area"
        },
        {
          "yaw": 0.7978668240179658,
          "pitch": 0.5470194488765934,
          "rotation": 5.497787143782138,
          "target": "9-dinning-area"
        },
        {
          "yaw": 1.5179461208789764,
          "pitch": 0.5838642521758679,
          "rotation": 0,
          "target": "10-dinning-area---kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-living-area",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.8419302229766146,
        "pitch": 0.12641577301512896,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -3.118718293647188,
          "pitch": 0.05894412730680898,
          "rotation": 0,
          "target": "0-logia-open"
        },
        {
          "yaw": 2.758225595963485,
          "pitch": 0.866097295497454,
          "rotation": 0,
          "target": "13-living-area-shades"
        },
        {
          "yaw": -0.6362545979978353,
          "pitch": 0.5121488693654523,
          "rotation": 5.497787143782138,
          "target": "11-kitchen"
        },
        {
          "yaw": -0.15508569001277905,
          "pitch": 0.47845731447456785,
          "rotation": 0,
          "target": "10-dinning-area---kitchen"
        },
        {
          "yaw": -0.08151040892489192,
          "pitch": 0.24773836565091578,
          "rotation": 0,
          "target": "9-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-living-area-shades",
      "name": "Living area (shades)",
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
          "yaw": -3.1333471009973053,
          "pitch": 0.04200420679713446,
          "rotation": 0,
          "target": "1-logia-closed"
        },
        {
          "yaw": 2.9883038063729366,
          "pitch": 0.9743173270736172,
          "rotation": 0,
          "target": "12-living-area"
        },
        {
          "yaw": -0.6445287883994926,
          "pitch": 0.5502143303943967,
          "rotation": 5.497787143782138,
          "target": "11-kitchen"
        },
        {
          "yaw": -0.15845731797893947,
          "pitch": 0.6068387387419705,
          "rotation": 0,
          "target": "10-dinning-area---kitchen"
        },
        {
          "yaw": -0.08201817338101058,
          "pitch": 0.26976611771485715,
          "rotation": 0,
          "target": "9-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ar",
      "name": "AR",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.1497830581448483,
        "pitch": 0.5014208063190679,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -1.6015780515446458,
          "pitch": 0.664422449911207,
          "rotation": 0,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-wc",
      "name": "WC",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.657123569476747,
        "pitch": 0.40921527015292014,
        "fov": 1.4121211747256568
      },
      "linkHotspots": [
        {
          "yaw": -2.643665972063287,
          "pitch": 0.7630552945378852,
          "rotation": 0.7853981633974483,
          "target": "2-entrance"
        },
        {
          "yaw": 2.892846825652585,
          "pitch": 0.8127437870975438,
          "rotation": 5.497787143782138,
          "target": "3-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartment 360 Tour - empty",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
