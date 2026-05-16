#!/bin/bash
set -e
BASE="/home/gunnar/src/geoguessr-meta/public/images/car-meta/geometas"
URL="https://paulplay-storage-1.fra1.digitaloceanspaces.com/geometas"

download() {
  local uuid="$1"
  local name="$2"
  local dest="$BASE/$name.jpg"
  if [ -f "$dest" ]; then echo "SKIP $name"; return; fi
  echo "GET  $name"
  curl -sL -o "$dest" "$URL/$uuid.jpg" || echo "FAIL $name"
}

# Africa
download "03fdfb7a-efed-489d-9a99-1230192108d4" "kenya-snorkel"
download "15b0fdbe-56d1-4e55-b15c-32b488c059a8" "kenya-new"
download "426e623c-77df-40e8-85d6-5ae8f822020b" "nigeria-rack"
download "62fdaa94-3dc1-4544-8e24-258101736126" "nigeria-truck"
download "9877a80e-2240-4c17-a663-a8637434045f" "senegal-gen3"
download "539efe22-a5a6-4a1b-9e31-3886c5ecacfb" "senegal-gen4-white"
download "c54088f6-a939-4053-be56-a8304b2634cd" "senegal-gen4-silver"
download "c68d6beb-adaa-4a39-8ff7-de470ea7289f" "ghana"
download "497dbad3-9d6d-42b8-aa3f-16e44fa1274f" "uganda-park"
download "5fd61eb3-1171-4565-b119-a5bb915c3767" "uganda-suv"
download "01f51ab2-12ea-4625-836b-bc33982090a4" "rwanda"
download "6ca29679-b508-40e5-b83b-51f844ea72b8" "south-africa"

# Middle East
download "d2b43b1b-601d-4a56-ac85-2e2cc9c90275" "uae-white"
download "2d83589c-2645-459f-b352-eef711d797fd" "uae-truck"
download "4465e13f-21e4-42db-a7f3-a188caf77265" "jordan"
download "9d1d2c33-8769-4deb-993f-38cc3bcc37c5" "qatar"

# Asia
download "4479601d-3534-4a42-9401-d5c241ce5886" "india"
download "794706f4-557a-4ade-8e80-3fa279332f88" "vietnam"
download "27c2c453-d687-4281-9a80-69a6ab41a89f" "kyrgyzstan-mirror"
download "bd110dbc-088d-4bc0-b185-3df9eadfdacd" "kyrgyzstan-bars"
download "6d716176-d764-4de7-9196-89a7f216f5c4" "mongolia-bars"
download "ad14cdb1-204d-4c71-ada5-4e9b8b70a02a" "mongolia-rubber"
download "edc71e7a-8fb7-4cf8-b64d-1f87f33416f0" "mongolia-camping"
download "d3dc7b76-975d-47d3-aad0-548ac0158ba3" "laos"
download "554621dc-cec3-45dc-8983-3ce2fbb5c086" "pakistan"

# Americas
download "18112065-d056-460a-bc0a-38a57d34583c" "argentina"
download "c0a2666b-bf37-4b58-8ffe-52f6501dafde" "uruguay"
download "96ad3257-362b-43cc-bfec-9fb7973faa7b" "chile"
download "59c720b4-40a4-4fa9-98d6-e37de618bad9" "colombia"
download "e38e95d2-9303-46b3-b532-5795bfa40724" "ecuador"
download "1c12e790-5ddd-4430-9076-76d3e0c10fcd" "panama"
download "e9c35087-7652-43cb-813c-06e616e1d69e" "guatemala"

# Europe
download "09c9daaa-f25d-4490-89a6-e812d043b409" "iceland"
download "1d1ef5ea-113b-46c7-8812-a2b5698fe3e6" "germany"
download "24c09ed9-3173-4442-a541-d77908e0cdb0" "ukraine"
download "5fecd0db-b004-40ae-bb90-d32c5150eb4d" "north-macedonia"
download "baf20372-dfab-4fa3-b13e-a54965c1d237" "serbia"
download "972ca4ac-81cc-42b8-903e-8cd8a37e01da" "faroe-islands"

# Islands & Pacific
download "5c685467-108b-4264-a337-5ef9e1d8afe1" "guam"
download "65a304ed-786f-4e18-a1a9-cbbc36294d81" "northern-mariana"
download "68df6658-3860-4726-ac5a-431b253d9136" "us-virgin-islands"
download "e1f3a32a-cf90-458f-b689-b2bc2c4f52d2" "american-samoa"
download "58e62131-ed60-450b-9b11-dc2a8f8f981b" "american-samoa-person"
download "b116d6a0-165b-4651-a483-30b519e0e872" "christmas-island"
download "8293f27c-dd00-4a55-8033-cb72ecc5a564" "bermuda-truck"
download "2bf0c6d3-214d-4a33-8e4d-bb7b712ddd64" "curacao-bars"
download "664b0a30-c2f3-4cff-bb9a-ddd7fc4229ed" "curacao-bonnet"
download "eda7e53a-1407-47b5-9a5a-ac4448ff3914" "reunion"

# Other
download "26a37855-a8b8-4621-b1d7-c441003e6d0e" "tunisia-north"
download "c1c91d09-60c5-4862-bdd8-6255422a4577" "tunisia-south"
download "0f89a7c7-f365-4c71-b762-be71e2630cf7" "madagascar-boat"
download "b698dcd2-4950-41e2-a1af-1a934dae3790" "madagascar-walk"
download "df26f0e4-160e-452e-b11a-8fdc025d47d1" "madagascar-ox"
download "87835301-c799-4460-8346-52c9c3a980c4" "sri-lanka-gen3"
download "94a0a9a8-39e9-4bc2-b337-04bad1651d88" "sri-lanka-gen4"
download "58308aff-efed-4ef8-9e15-ea64e563151b" "bermuda-boat"
download "3aa5cbeb-f453-42f1-96fb-696110cbdaff" "faroe-landscape"

echo "Done!"
ls "$BASE" | wc -l
