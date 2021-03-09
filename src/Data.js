export const  faceData = {
  "status": {
    "code": 10000,
    "description": "Ok",
    "req_id": "5b2e2b79bfe14f7795f7869fe858e44a"
  },
  "outputs": [
    {
      "id": "1fe531cab18f46c882cfa17672be7602",
      "status": {
        "code": 10000,
        "description": "Ok"
      },
      "created_at": "2021-03-07T12:52:31.219432776Z",
      "model": {
        "id": "a403429f2ddf4b49b307e318f00e528b",
        "name": "face",
        "created_at": "2016-10-25T19:30:38.541073Z",
        "app_id": "main",
        "output_info": {
          "output_config": {
            "concepts_mutually_exclusive": false,
            "closed_environment": false,
            "max_concepts": 0,
            "min_value": 0
          },
          "message": "Show output_info with: GET /models/{model_id}/output_info",
          "type": "detect-concept",
          "type_ext": "detect-concept"
        },
        "model_version": {
          "id": "34ce21a40cc24b6b96ffee54aabff139",
          "created_at": "2019-01-17T19:45:49.087547Z",
          "status": {
            "code": 21100,
            "description": "Model is trained and ready"
          }
        },
        "display_name": "Face Detection",
        "input_info": {},
        "train_info": {},
        "model_type_id": "visual-detector"
      },
      "input": {
        "id": "b840dda308ee416091d21a6311cd6657",
        "data": {
          "image": {
            "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-shapes-mobile-lede-2-1526399896.jpg?crop=0.667xw:0.889xh;0,0&resize=640:*"
          }
        }
      },
      "data": {
        "regions": [
          {
            "id": "ra7kl8yy7u7m",
            "region_info": {
              "bounding_box": {
                "top_row": 0.719677,
                "left_col": 0.809085,
                "bottom_row": 0.9501339,
                "right_col": 0.94162923
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99980134,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99980134
          },
          {
            "id": "3s667o1pygo7",
            "region_info": {
              "bounding_box": {
                "top_row": 0.7200549,
                "left_col": 0.06351849,
                "bottom_row": 0.9528478,
                "right_col": 0.18786705
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99964416,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99964416
          },
          {
            "id": "d4oq79f03alh",
            "region_info": {
              "bounding_box": {
                "top_row": 0.0650314,
                "left_col": 0.8135255,
                "bottom_row": 0.2934119,
                "right_col": 0.937305
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99941385,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99941385
          },
          {
            "id": "76rsixpyyr84",
            "region_info": {
              "bounding_box": {
                "top_row": 0.06750548,
                "left_col": 0.062514216,
                "bottom_row": 0.2954164,
                "right_col": 0.18224357
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99935776,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99935776
          },
          {
            "id": "2wn1ddx7njgs",
            "region_info": {
              "bounding_box": {
                "top_row": 0.3940156,
                "left_col": 0.062181216,
                "bottom_row": 0.62260824,
                "right_col": 0.18566708
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9991769,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9991769
          },
          {
            "id": "p1eds8mxl7f1",
            "region_info": {
              "bounding_box": {
                "top_row": 0.07162563,
                "left_col": 0.30732813,
                "bottom_row": 0.29493132,
                "right_col": 0.43069392
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99892586,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99892586
          },
          {
            "id": "s5qeyq2au1cn",
            "region_info": {
              "bounding_box": {
                "top_row": 0.39469105,
                "left_col": 0.8160278,
                "bottom_row": 0.6255871,
                "right_col": 0.93668383
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.99889,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.99889
          },
          {
            "id": "yj89egdew4x7",
            "region_info": {
              "bounding_box": {
                "top_row": 0.722721,
                "left_col": 0.5632298,
                "bottom_row": 0.95489323,
                "right_col": 0.6823151
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9984389,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9984389
          },
          {
            "id": "kkpf16jhj961",
            "region_info": {
              "bounding_box": {
                "top_row": 0.72254616,
                "left_col": 0.32367912,
                "bottom_row": 0.9478033,
                "right_col": 0.44213963
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9983613,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9983613
          },
          {
            "id": "i8u3thwz65zo",
            "region_info": {
              "bounding_box": {
                "top_row": 0.39415628,
                "left_col": 0.30852786,
                "bottom_row": 0.62332195,
                "right_col": 0.44024745
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9980421,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9980421
          },
          {
            "id": "mmz7d0npomh4",
            "region_info": {
              "bounding_box": {
                "top_row": 0.071513556,
                "left_col": 0.5707548,
                "bottom_row": 0.28797162,
                "right_col": 0.68954766
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9978986,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9978986
          },
          {
            "id": "t2i2wg1lpj53",
            "region_info": {
              "bounding_box": {
                "top_row": 0.3978926,
                "left_col": 0.56413907,
                "bottom_row": 0.62663156,
                "right_col": 0.6909603
              }
            },
            "data": {
              "concepts": [
                {
                  "id": "ai_8jtPl3Xj",
                  "name": "face",
                  "value": 0.9972582,
                  "app_id": "main"
                }
              ]
            },
            "value": 0.9972582
          }
        ]
      }
    }
  ],
  "rawData": {
    "status": {
      "code": 10000,
      "description": "Ok",
      "req_id": "5b2e2b79bfe14f7795f7869fe858e44a"
    },
    "outputs": [
      {
        "id": "1fe531cab18f46c882cfa17672be7602",
        "status": {
          "code": 10000,
          "description": "Ok"
        },
        "created_at": "2021-03-07T12:52:31.219432776Z",
        "model": {
          "id": "a403429f2ddf4b49b307e318f00e528b",
          "name": "face",
          "created_at": "2016-10-25T19:30:38.541073Z",
          "app_id": "main",
          "output_info": {
            "output_config": {
              "concepts_mutually_exclusive": false,
              "closed_environment": false,
              "max_concepts": 0,
              "min_value": 0
            },
            "message": "Show output_info with: GET /models/{model_id}/output_info",
            "type": "detect-concept",
            "type_ext": "detect-concept"
          },
          "model_version": {
            "id": "34ce21a40cc24b6b96ffee54aabff139",
            "created_at": "2019-01-17T19:45:49.087547Z",
            "status": {
              "code": 21100,
              "description": "Model is trained and ready"
            }
          },
          "display_name": "Face Detection",
          "input_info": {},
          "train_info": {},
          "model_type_id": "visual-detector"
        },
        "input": {
          "id": "b840dda308ee416091d21a6311cd6657",
          "data": {
            "image": {
              "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/face-shapes-mobile-lede-2-1526399896.jpg?crop=0.667xw:0.889xh;0,0&resize=640:*"
            }
          }
        },
        "data": {
          "regions": [
            {
              "id": "ra7kl8yy7u7m",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.719677,
                  "left_col": 0.809085,
                  "bottom_row": 0.9501339,
                  "right_col": 0.94162923
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99980134,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99980134
            },
            {
              "id": "3s667o1pygo7",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.7200549,
                  "left_col": 0.06351849,
                  "bottom_row": 0.9528478,
                  "right_col": 0.18786705
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99964416,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99964416
            },
            {
              "id": "d4oq79f03alh",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.0650314,
                  "left_col": 0.8135255,
                  "bottom_row": 0.2934119,
                  "right_col": 0.937305
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99941385,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99941385
            },
            {
              "id": "76rsixpyyr84",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.06750548,
                  "left_col": 0.062514216,
                  "bottom_row": 0.2954164,
                  "right_col": 0.18224357
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99935776,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99935776
            },
            {
              "id": "2wn1ddx7njgs",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.3940156,
                  "left_col": 0.062181216,
                  "bottom_row": 0.62260824,
                  "right_col": 0.18566708
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9991769,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9991769
            },
            {
              "id": "p1eds8mxl7f1",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.07162563,
                  "left_col": 0.30732813,
                  "bottom_row": 0.29493132,
                  "right_col": 0.43069392
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99892586,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99892586
            },
            {
              "id": "s5qeyq2au1cn",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.39469105,
                  "left_col": 0.8160278,
                  "bottom_row": 0.6255871,
                  "right_col": 0.93668383
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.99889,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.99889
            },
            {
              "id": "yj89egdew4x7",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.722721,
                  "left_col": 0.5632298,
                  "bottom_row": 0.95489323,
                  "right_col": 0.6823151
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9984389,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9984389
            },
            {
              "id": "kkpf16jhj961",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.72254616,
                  "left_col": 0.32367912,
                  "bottom_row": 0.9478033,
                  "right_col": 0.44213963
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9983613,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9983613
            },
            {
              "id": "i8u3thwz65zo",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.39415628,
                  "left_col": 0.30852786,
                  "bottom_row": 0.62332195,
                  "right_col": 0.44024745
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9980421,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9980421
            },
            {
              "id": "mmz7d0npomh4",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.071513556,
                  "left_col": 0.5707548,
                  "bottom_row": 0.28797162,
                  "right_col": 0.68954766
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9978986,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9978986
            },
            {
              "id": "t2i2wg1lpj53",
              "region_info": {
                "bounding_box": {
                  "top_row": 0.3978926,
                  "left_col": 0.56413907,
                  "bottom_row": 0.62663156,
                  "right_col": 0.6909603
                }
              },
              "data": {
                "concepts": [
                  {
                    "id": "ai_8jtPl3Xj",
                    "name": "face",
                    "value": 0.9972582,
                    "app_id": "main"
                  }
                ]
              },
              "value": 0.9972582
            }
          ]
        }
      }
    ]
  }
};

