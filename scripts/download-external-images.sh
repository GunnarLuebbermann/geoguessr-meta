#!/bin/bash
# Download all external images referenced in data files and save them locally
set -e

BASE="/home/gunnar/src/geoguessr-meta/public/images/external"
mkdir -p "$BASE"

download() {
  local url="$1"
  local filename="$2"
  local dest="$BASE/$filename"
  if [ -f "$dest" ]; then
    echo "SKIP $filename"
    return
  fi
  echo "GET  $filename"
  curl -sL -o "$dest" "$url" || echo "FAIL $filename"
}

# Squarespace images
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/19dfb5b1-0cb0-49a5-adb4-9b211585bffc/19.png" "chevron-19.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/1cb481a2-a163-4acb-a655-2fe3ebc15a65/in_licenceplates.png" "in_licenceplates.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/3709c75a-5e31-4fb9-b99d-e89c17890185/Canadian_KM_markers_map_w_numbers2.png" "Canadian_KM_markers_map_w_numbers2.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/37aab839-63c2-49bf-a105-c54a313b499e/licenceplate.png" "licenceplate_pt.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/4b587071-80b9-48fa-b796-86e152960c2a/bollard.png" "bollard.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/5c9365b3-3706-42aa-9ff1-9fcc4af2fa46/Tunisia_License_Plate.png" "Tunisia_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/63dfffec-236e-47e9-9e08-de96dc01b0b8/Sri_Lanka_License_Plate.png" "Sri_Lanka_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/65f082aa-05cb-49a2-941b-91fcd84d7790/Indonesia_License_Plate.png" "Indonesia_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/78fe5bd2-3416-4a95-96aa-d942a5a126f7/IOM_Plate.png" "IOM_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/85dfe365-bb35-404d-8086-a316c7d3fb79/no_licenceplate.png" "no_licenceplate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/9097238f-86c1-46fc-ab40-87bfe8683587/Chevrons.png" "Chevrons.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/930bd2e7-57fa-4807-8e8a-733ba5a702a8/europeguardrail.png" "europeguardrail.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/930c8141-7d6e-4397-a56c-f58b902e85c1/Brasil_-_Códigos_de_área_DDD.png" "Brasil_Codigos_de_area_DDD.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/a1b713f8-44c7-4d20-a74e-0a27a653e68a/eu_chevrons.png" "eu_chevrons.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/a644d321-c95e-4162-81eb-58dcc1f15c02/Malaysia+License+Plate.png" "Malaysia_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/bada5a2e-343f-4443-813b-c0eefe14aac1/Spain-road-prefixes-final-version-hopefully.png" "Spain-road-prefixes.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/c0b48970-d754-4c7f-8467-dca6da537557/Jordan_License_Plate.png" "Jordan_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/c7faa943-c6b0-4316-9ff2-a1eb2a02a907/Infrastructure_-_SK_Alternating_Pole_Tops.png" "SK_Alternating_Pole_Tops.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/c9545ae3-61c3-4169-be7d-5e6bbead5267/2.png" "panama_plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/d5a4aad9-11c4-44d8-befa-5b66503186ab/Belgium_License_Plate.png" "Belgium_License_Plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/da8071d2-8030-40ee-ad53-4c78feae81c0/albania_plate.png" "albania_plate.png"
download "https://images.squarespace-cdn.com/content/v1/60f6054f4e76b03092956de8/fdd3082a-e8c6-45f6-bbee-45f172b6920a/baltics_kmmarkerinfographic.png" "baltics_kmmarkerinfographic.png"

# Wikipedia images
download "https://upload.wikimedia.org/wikipedia/commons/0/03/Finland_road_sign_B5.svg" "Finland_road_sign_B5.svg"
download "https://upload.wikimedia.org/wikipedia/commons/1/1d/RU_road_sign_3.27.svg" "RU_road_sign_3.27.svg"
download "https://upload.wikimedia.org/wikipedia/commons/2/22/Estonia_road_sign_361.svg" "Estonia_road_sign_361.svg"
download "https://upload.wikimedia.org/wikipedia/commons/3/3a/Norway_Spruce_Picea_abies_distribution_map_2.png" "Norway_Spruce_distribution.png"
download "https://upload.wikimedia.org/wikipedia/commons/4/4e/Iceland_road_sign_D02.11.svg" "Iceland_road_sign_D02.11.svg"
download "https://upload.wikimedia.org/wikipedia/commons/5/50/Denmark_road_sign_E17.svg" "Denmark_road_sign_E17.svg"
download "https://upload.wikimedia.org/wikipedia/commons/5/51/Hungary_road_sign_E-039.svg" "Hungary_road_sign_E-039.svg"
download "https://upload.wikimedia.org/wikipedia/commons/5/58/Estonia_road_sign_544.svg" "Estonia_road_sign_544.svg"
download "https://upload.wikimedia.org/wikipedia/commons/5/5a/Provinces_of_Spain.svg" "Provinces_of_Spain.svg"
download "https://upload.wikimedia.org/wikipedia/commons/6/66/NO_road_sign_516.H.svg" "NO_road_sign_516.H.svg"
download "https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Tigo.svg" "Logo_Tigo.svg"
download "https://upload.wikimedia.org/wikipedia/commons/6/6c/Latvia_road_sign_541.svg" "Latvia_road_sign_541.svg"
download "https://upload.wikimedia.org/wikipedia/commons/7/74/PL_road_sign_A-7.svg" "PL_road_sign_A-7.svg"
download "https://upload.wikimedia.org/wikipedia/commons/7/77/Latvia_road_sign_326.svg" "Latvia_road_sign_326.svg"
download "https://upload.wikimedia.org/wikipedia/commons/8/8c/RO_road_sign_G14.svg" "RO_road_sign_G14.svg"
download "https://upload.wikimedia.org/wikipedia/commons/9/9f/RO_road_sign_B01.svg" "RO_road_sign_B01.svg"
download "https://upload.wikimedia.org/wikipedia/commons/a/a3/Estonia_road_sign_541a.svg" "Estonia_road_sign_541a.svg"
download "https://upload.wikimedia.org/wikipedia/commons/a/a3/Lithuanian_pedestrian_crossing_sign.png" "Lithuanian_pedestrian_crossing_sign.png"
download "https://upload.wikimedia.org/wikipedia/commons/b/b2/Sweden_road_sign_B3-1.svg" "Sweden_road_sign_B3-1.svg"
download "https://upload.wikimedia.org/wikipedia/commons/b/b4/Spain_traffic_signal_s13.svg" "Spain_traffic_signal_s13.svg"
download "https://upload.wikimedia.org/wikipedia/commons/c/c4/RU_road_sign_5.16.svg" "RU_road_sign_5.16.svg"
download "https://upload.wikimedia.org/wikipedia/commons/d/d2/Latvia_road_sign_535.svg" "Latvia_road_sign_535.svg"
download "https://upload.wikimedia.org/wikipedia/commons/f/f3/PL_road_sign_D-15.svg" "PL_road_sign_D-15.svg"
download "https://upload.wikimedia.org/wikipedia/commons/f/f3/PL_road_sign_D-6.svg" "PL_road_sign_D-6.svg"
download "https://upload.wikimedia.org/wikipedia/commons/f/ff/Finland_road_sign_511.svg" "Finland_road_sign_511.svg"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ph_regions_and_provinces.svg/1920px-Ph_regions_and_provinces.svg.png" "Ph_regions_and_provinces.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/New_Zealand_road_sign_R2-2.svg/330px-New_Zealand_road_sign_R2-2.svg.png" "New_Zealand_road_sign_R2-2.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Arret_Quebec.svg/250px-Arret_Quebec.svg.png" "Arret_Quebec.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Larix_decidua_range.svg/960px-Larix_decidua_range.svg.png" "Larix_decidua_range.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Pinus_sylvestris_range-01.png/1280px-Pinus_sylvestris_range-01.png" "Pinus_sylvestris_range.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Indonesia%2C_administrative_divisions_-_en_-_monochrome.svg/3840px-Indonesia%2C_administrative_divisions_-_en_-_monochrome.svg.png" "Indonesia_administrative_divisions.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vietnam%2C_administrative_divisions_%28regions%2Bprovinces%29_-_de_-_monochrome.svg/1280px-Vietnam%2C_administrative_divisions_%28regions%2Bprovinces%29_-_de_-_monochrome.svg.png" "Vietnam_administrative_divisions.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Australia_road_sign_R1-2.svg/272px-Australia_road_sign_R1-2.svg.png" "Australia_road_sign_R1-2.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Malaysia_road_sign_RP1.svg/250px-Malaysia_road_sign_RP1.svg.png" "Malaysia_road_sign_RP1.png"
download "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Turkey_road_sign_TT-2.svg/250px-Turkey_road_sign_TT-2.svg.png" "Turkey_road_sign_TT-2.png"

echo "Done! Downloaded to $BASE"
ls -la "$BASE" | wc -l
