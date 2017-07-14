// Template to generate current_fires.js via a server-side Python script 

$(document).ready(function(){
	var firemap = [];
	var fire;
	
	// Fire data is written into this script server-side and appended to an array of fire objects called firemap
		fire = {
		designation: "North Hills",
		center: new google.maps.LatLng(62.1606667, -163.1690833),
		acreage: 178.2,
		maintext: "Decrease in acreage with updated perimeter.",
		lastupdated: "09 Jul 2017, 01:17",
		discovered: "08 Jun 2017, 06:00"		
	};
	firemap.push(fire);
	fire = {
		designation: "Kowlak",
		center: new google.maps.LatLng(69.9508333, -157.8397222),
		acreage: 4.7,
		maintext: "Decrease in acreage due to new LandSat perimeter.",
		lastupdated: "04 Jul 2017, 02:47",
		discovered: "28 Jun 2017, 09:36"		
	};
	firemap.push(fire);
	fire = {
		designation: "Garnet Creek",
		center: new google.maps.LatLng(65.3315, -150.6751667),
		acreage: 20,
		maintext: "Zone surveillance aircraft N309VS flew the fire and reported no visible smoke.",
		lastupdated: "13 Jul 2017, 11:25",
		discovered: "06 Jul 2017, 08:29"		
	};
	firemap.push(fire);
	fire = {
		designation: "Dietrich River",
		center: new google.maps.LatLng(67.8851389, -149.8075556),
		acreage: 332,
		maintext: "On 7/13, the fire received precipitation and no dominant smokes were visible from the highway; however, drift smoke was present in the area. An unmanned UAS flew the fire and captured infrared images indicating areas of heat. On 7/14, all resources will demobilize from the fire and the fire will remain in monitor status. Fire size decreased to 332 acres due to more accurate mapping.",
		lastupdated: "13 Jul 2017, 13:06",
		discovered: "05 Jul 2017, 03:00"		
	};
	firemap.push(fire);
	fire = {
		designation: "Blair Lakes",
		center: new google.maps.LatLng(64.3393333, -147.4405),
		acreage: 332,
		maintext: "Zone detection aircraft N309VS flew the fire today. No smoke was observed. The fire remains in monitor status.",
		lastupdated: "04 Jul 2017, 14:11",
		discovered: "01 Jun 2017, 05:52"		
	};
	firemap.push(fire);
	fire = {
		designation: "Medicine Lake",
		center: new google.maps.LatLng(65.4828333, -144.4725),
		acreage: 25,
		maintext: "Fire was flown by zone surveillance aircraft N9011N and confirmed at 25 acres with no visible smoke. The fire plotted in a Limited suppression area and will be monitored by zone aircraft.",
		lastupdated: "07 Jul 2017, 09:51",
		discovered: "05 Jul 2017, 08:00"		
	};
	firemap.push(fire);
	fire = {
		designation: "Helmet",
		center: new google.maps.LatLng(67.5596667, -144.0433333),
		acreage: 22227.3,
		maintext: "Zone surveillance aircraft N222ME flew the area of the fire but was unable to observe it due to heavy smoke.",
		lastupdated: "14 Jul 2017, 01:48",
		discovered: "06 Jul 2017, 05:55"		
	};
	firemap.push(fire);
	fire = {
		designation: "Vunle Lakes",
		center: new google.maps.LatLng(66.4856667, -143.6733334),
		acreage: 4,
		maintext: "The fire was demobilized and placed into monitor status.",
		lastupdated: "12 Jul 2017, 09:44",
		discovered: "08 Jul 2017, 02:57"		
	};
	firemap.push(fire);
	fire = {
		designation: "Paddle Creek",
		center: new google.maps.LatLng(65.8865, -143.5688333),
		acreage: 235.4,
		maintext: "Flown today by N222ME. The fire perimeter was 30% active, smoldering in tundra. Observed a 50 + acres increase to the west.",
		lastupdated: "10 Jul 2017, 22:31",
		discovered: "06 Jul 2017, 07:26"		
	};
	firemap.push(fire);
	fire = {
		designation: "Bear Mountain",
		center: new google.maps.LatLng(65.9666666, -142.85),
		acreage: 10188.8,
		maintext: "Zone surveillance aircraft N222ME flew the fire and reported it with a 10 percent active perimeter. The fire behavior was described as smoldering in a spruce/hardwood/brush mix. Observations were taken under 40 percent cloud cover.",
		lastupdated: "14 Jul 2017, 01:47",
		discovered: "09 Jul 2017, 00:45"		
	};
	firemap.push(fire);
	fire = {
		designation: "Gardiner Creek 2",
		center: new google.maps.LatLng(63.0870278, -141.3386667),
		acreage: 1,
		maintext: "The fire was flown today during a detection flight.  No flames and no smoke was visible.  The fire remains in monitor status.",
		lastupdated: "09 Jul 2017, 22:34",
		discovered: "07 Jul 2017, 07:25"		
	};
	firemap.push(fire);
	fire = {
		designation: "Pass Creek",
		center: new google.maps.LatLng(65.0452778, -141.215),
		acreage: 21.8,
		maintext: "The fire was flown by zone aircraft N22ME. No smoke, growth or active perimeter was reported.",
		lastupdated: "13 Jul 2017, 07:29",
		discovered: "18 Jun 2017, 05:34"		
	};
	firemap.push(fire);
	fire = {
		designation: "Ammerman Creek",
		center: new google.maps.LatLng(68.4175833, -141.3226944),
		acreage: 23673.6,
		maintext: "Zone aircraft N222ME flew the fire and reported a 5 percent active perimeter, smoldering and creeping.  Personnel on board identified the largest amount activity on the southeast corner.  The fire remains west of Ammerman Creek and north of the Old Crow River.",
		lastupdated: "13 Jul 2017, 10:51",
		discovered: "23 Jun 2017, 09:05"		
	};
	firemap.push(fire);
	fire = {
		designation: "Andreafsky",
		center: new google.maps.LatLng(62.2646667, -163.021),
		acreage: 514,
		maintext: "Decrease in acreage is due to more accurate mapping.",
		lastupdated: "08 Jul 2017, 23:05",
		discovered: "08 Jun 2017, 04:45"		
	};
	firemap.push(fire);
	fire = {
		designation: "Point Lay",
		center: new google.maps.LatLng(69.6728334, -162.8638334),
		acreage: 25,
		maintext: "The Assistant Director of the North Slope Fire Department Borough in Barrow, received a smoke report from locals in Point Lay.  Several thunderstorms and lightning had moved through the area and locals were seeing a large plume of white smoke approximately 5-6 miles SE of Point Lay.  N864SF responded to the smoke report from Kotzebue and confirmed a 25 acre tundra fire of DOF ownership, plotting in Limited.  The fire is currently being held up by 2 water sources on the north and east ends of the fire and will continue to spread south and west.  There are currently no values at risk, so the fire will remain in monitor status.",
		lastupdated: "11 Jul 2017, 11:31",
		discovered: "28 Jun 2017, 06:44"		
	};
	firemap.push(fire);
	fire = {
		designation: "East Fork",
		center: new google.maps.LatLng(60.596333, -150.521167),
		acreage: 1016,
		maintext: "Two recon flights were conducted over fire 231, neither found smoke. Personnel took approximately four tons of equipment and supplies off the fire by helicopter and ground. None of the connected suppression equipment was dismantled or taken off the fire.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "15 Jun 2017, 10:25"		
	};
	firemap.push(fire);
	fire = {
		designation: "Sand Hills",
		center: new google.maps.LatLng(66.333, -148.129),
		acreage: 30,
		maintext: "At 1450 the fire was flown by zone helicopter H-73HJ. The fire was 100 percent active burning in black spruce. Observed fire behavior included running, crowning, torching, and spotting approximately 200 yards ahead. The fire size had increased to approximately 30 acres.",
		lastupdated: "08 Jul 2017, 14:28",
		discovered: "06 Jul 2017, 07:25"		
	};
	firemap.push(fire);
	fire = {
		designation: "South Fork Salcha",
		center: new google.maps.LatLng(64.4436389, -145.5533889),
		acreage: 8344.9,
		maintext: "H-120SH flew the fire, 1 acre of growth was noted on the northside, no other smokes found.  Fire remains in monitor status.",
		lastupdated: "09 Jul 2017, 22:35",
		discovered: "08 Jun 2017, 03:09"		
	};
	firemap.push(fire);
	fire = {
		designation: "Loper 2",
		center: new google.maps.LatLng(65.57975, -145.7041667),
		acreage: 1,
		maintext: "The fire was discovered by Zone surveillance aircraft N309VS. The fire was 1 acre in tundra with no active perimeter or smokes showing. The fire plotted in Limited and was placed in monitor status.",
		lastupdated: "09 Jul 2017, 10:48",
		discovered: "09 Jul 2017, 03:37"		
	};
	firemap.push(fire);
	fire = {
		designation: "Charley",
		center: new google.maps.LatLng(65.6901667, -143.0935),
		acreage: 14.6,
		maintext: "At 1315 the fire was flown by zone surveillance aircraft N9011N. No smokes were visible and no change observed.",
		lastupdated: "09 Jul 2017, 08:15",
		discovered: "28 Jun 2017, 08:04"		
	};
	firemap.push(fire);
	fire = {
		designation: "East Tetlin",
		center: new google.maps.LatLng(63.0278889, -142.2871667),
		acreage: 2.8,
		maintext: "Fire is contained and controlled, and will be placed into monitor status.",
		lastupdated: "13 Jul 2017, 21:58",
		discovered: "10 Jul 2017, 08:12"		
	};
	firemap.push(fire);
	fire = {
		designation: "Dorothy Creek",
		center: new google.maps.LatLng(67.6928056, -142.2386944),
		acreage: 2876.5,
		maintext: "At 1545 zone surveillance aircraft N222ME flew reconnaissance over the fire. No smokes and no active perimeter were observed.",
		lastupdated: "13 Jul 2017, 10:50",
		discovered: "30 Jun 2017, 07:08"		
	};
	firemap.push(fire);
	fire = {
		designation: "Trout Creek",
		center: new google.maps.LatLng(65.1022222, -141.6383333),
		acreage: 226.2,
		maintext: "Increase in acreage matches latest perimeter.",
		lastupdated: "12 Jul 2017, 22:07",
		discovered: "21 Jun 2017, 11:37"		
	};
	firemap.push(fire);
	fire = {
		designation: "Campbell River",
		center: new google.maps.LatLng(67.2183056, -141.0150278),
		acreage: 45521.7,
		maintext: "At 1500 the fire was flown by zone surveillance aircraft N222ME. The fire was 25 percent active and was spreading to the north. Observed fire behavior included backing and torching in black spruce with 10 foot flame lengths. Weather observed included wind out of the north at 10 mph with 10 percent cloud cover and no precipitation.  Fire is most active on the SW edge.  A 12 mile line of fire has burned 2.10 miles south of the Salmon Trout allotment.   Resources on scene of the allotment and cabin continued to monitor weather and fuel conditions in preparation for a burnout operation. Higher relative humidities kept fuels damp and no burn was attempted. The Midnight Sun IHC began to pretreat areas around the allotment with water.  Tommorow personnel will continue monitoring conditions. A helicopter reconnaissance flight has been scheduled for tomorrow (7/14).",
		lastupdated: "13 Jul 2017, 13:05",
		discovered: "26 Jun 2017, 09:14"		
	};
	firemap.push(fire);
	fire = {
		designation: "Coal Creek 17",
		center: new google.maps.LatLng(64.0361333, -148.5646333),
		acreage: 0.5,
		maintext: "H120SH flew fire, currently 1/2 acre barely smoking.  Little to no spread.",
		lastupdated: "07 Jul 2017, 05:18",
		discovered: "06 Jun 2017, 02:01"		
	};
	firemap.push(fire);
	fire = {
		designation: "Coal Creek South",
		center: new google.maps.LatLng(64.029783, -148.56375),
		acreage: 1.5,
		maintext: "H120SH flew fire, currently 1.5 acres, 1-2` flame lengths on the uphill west side.  No action taken, remaining in monitor status.",
		lastupdated: "07 Jul 2017, 05:10",
		discovered: "06 Jun 2017, 04:18"		
	};
	firemap.push(fire);
	fire = {
		designation: "Live Valley",
		center: new google.maps.LatLng(64.7073889, -146.5471111),
		acreage: 0.4,
		maintext: "Range Control reported the fire as two small grass fires adjacent to one another and just under one half acre in size. Skies were overcast with a 7 mph SSW wind. Zone detection aircraft N9011N flew a reconnaissance mission over the area in the evening but were unable to locate any sign of the fire.",
		lastupdated: "17 Jun 2017, 02:41",
		discovered: "16 Jun 2017, 04:56"		
	};
	firemap.push(fire);
	fire = {
		designation: "Boulder Creek",
		center: new google.maps.LatLng(67.45, -143.7333333),
		acreage: 23383.9,
		maintext: "Zone surveillance aircraft N222ME flew the fire and reported it with a 30 percent active perimeter and spreading to the north. The fire was creeping and backing with isolated torching in black spruce. Observations were taken under 30 percent cloud cover with calm winds.   Personnel on the ground continued to improve upon the saw line around the allotment. An UAS (unmanned aircraft system) was launched and performed a recon over the fire.",
		lastupdated: "14 Jul 2017, 01:49",
		discovered: "02 Jul 2017, 07:12"		
	};
	firemap.push(fire);
	fire = {
		designation: "Allen",
		center: new google.maps.LatLng(62.5551667, -163.1535),
		acreage: 2583.5,
		maintext: "Increase in acreage due to uploaded perimeter.",
		lastupdated: "09 Jul 2017, 01:13",
		discovered: "07 Jun 2017, 00:03"		
	};
	firemap.push(fire);
	fire = {
		designation: "Wolf Creek",
		center: new google.maps.LatLng(62.2952778, -161.4383333),
		acreage: 5.2,
		maintext: "Change in acreage due to more accurate, digitized mapping.",
		lastupdated: "04 Jul 2017, 03:49",
		discovered: "03 Jun 2017, 11:11"		
	};
	firemap.push(fire);
	fire = {
		designation: "Little Yetna River",
		center: new google.maps.LatLng(62.570333, -158.577333),
		acreage: 16514,
		maintext: "The fire was flown by 904AK.  Personnel observed no activity and the fire remains in monitor status.",
		lastupdated: "13 Jul 2017, 20:04",
		discovered: "04 Jun 2017, 07:52"		
	};
	firemap.push(fire);
	fire = {
		designation: "Kobe Field",
		center: new google.maps.LatLng(64.25645, -149.354467),
		acreage: 4.2,
		maintext: "Prevention engine checked fire, found smoke in the NE corner of the slop over.  Added water, will have Forestry engine check 7/4/17.",
		lastupdated: "07 Jul 2017, 05:02",
		discovered: "27 Jun 2017, 19:40"		
	};
	firemap.push(fire);
	fire = {
		designation: "Old Lost Creek",
		center: new google.maps.LatLng(66.0363333, -148.0646667),
		acreage: 3,
		maintext: "At 1350 the fire was flown by zone surveillance aircraft N9011N. The fire was active with 3 foot flame lengths. Single tree torching was observed. Fire size had increased to approximately 3 acres.",
		lastupdated: "08 Jul 2017, 10:01",
		discovered: "07 Jul 2017, 06:52"		
	};
	firemap.push(fire);
	fire = {
		designation: "Preacher Creek",
		center: new google.maps.LatLng(65.95, -144.8),
		acreage: 74.8,
		maintext: "Increase in acreage from updated infrared imaging.",
		lastupdated: "11 Jul 2017, 14:52",
		discovered: "08 Jul 2017, 04:19"		
	};
	firemap.push(fire);
	fire = {
		designation: "Deadmans Slough",
		center: new google.maps.LatLng(62.6342222, -160.2121944),
		acreage: 322.6,
		maintext: "As off 1100, the fire has been called controlled and placed into monitor status. All resources have been demobilized from this fire.",
		lastupdated: "23 Jun 2017, 23:49",
		discovered: "04 Jun 2017, 11:22"		
	};
	firemap.push(fire);
	fire = {
		designation: "Tenmile",
		center: new google.maps.LatLng(64.0763889, -159.5341667),
		acreage: 51.6,
		maintext: "Decrease in acreage due to more accurate mapping.",
		lastupdated: "27 Jun 2017, 02:40",
		discovered: "07 Jun 2017, 11:17"		
	};
	firemap.push(fire);
	fire = {
		designation: "American Creek",
		center: new google.maps.LatLng(63.173333, -156.842833),
		acreage: 12945,
		maintext: "The fire was flown by 904AK.  Personnel observed no activity and the fire remains in monitor status.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "04 Jun 2017, 06:59"		
	};
	firemap.push(fire);
	fire = {
		designation: "White Snow",
		center: new google.maps.LatLng(67.5953055, -144.0851667),
		acreage: 338.6,
		maintext: "The fire was flown by surveillance aircraft N222ME. Fire 312 has consumed fire 303.",
		lastupdated: "14 Jul 2017, 01:48",
		discovered: "04 Jul 2017, 08:40"		
	};
	firemap.push(fire);
	fire = {
		designation: "2017 Windfall Mountain Overwinter _1",
		center: new google.maps.LatLng(65.0298056, -141.2518611),
		acreage: 45.2,
		maintext: "Fire was flown today by zone aircraft N309VS.  The observer on board reported no active perimeter or acreage gain. Some visible smoke within the fissure.",
		lastupdated: "07 Jul 2017, 04:46",
		discovered: "31 Dec 2016, 15:01"		
	};
	firemap.push(fire);
	fire = {
		designation: "White Mountain Creek",
		center: new google.maps.LatLng(67.4532778, -141.3181389),
		acreage: 62800.9,
		maintext: "The fire was flown by surveillance aircraft N222ME. The fire area was too smokey to make observations. New fire size result of update imaging.",
		lastupdated: "14 Jul 2017, 01:48",
		discovered: "03 Jul 2017, 06:09"		
	};
	firemap.push(fire);
	fire = {
		designation: "Omikmuktusuk",
		center: new google.maps.LatLng(69.679, -159.622),
		acreage: 1647.4,
		maintext: "Increase in acreage due to updated LandSat perimeter.",
		lastupdated: "04 Jul 2017, 03:02",
		discovered: "28 Jun 2017, 09:24"		
	};
	firemap.push(fire);
	fire = {
		designation: "Ketik River",
		center: new google.maps.LatLng(69.7545, -159.0356667),
		acreage: 2870.3,
		maintext: "Increase in acreage due to new LandSat perimeter.",
		lastupdated: "04 Jul 2017, 03:03",
		discovered: "28 Jun 2017, 09:24"		
	};
	firemap.push(fire);
	fire = {
		designation: "Wayne Taylor",
		center: new google.maps.LatLng(61.019074, -157.429832),
		acreage: 127,
		maintext: "The fire was flown by 35E.  No activity was observed and the fire remains in monitor status.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "25 Jun 2017, 11:53"		
	};
	firemap.push(fire);
	fire = {
		designation: "Pitka Fork",
		center: new google.maps.LatLng(62.425, -154.057167),
		acreage: 16823.9,
		maintext: "Personnel began backhauling structure protection equipment.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "04 Jun 2017, 09:18"		
	};
	firemap.push(fire);
	fire = {
		designation: "Kroto Creek",
		center: new google.maps.LatLng(62.0549444, -150.43525),
		acreage: 0.2,
		maintext: "The fire was reported by a private pilot.  Forestry`s helitack responded to the reported coordinates and located a .2 acre smoldering fire.  The helitack crew suppressed the fire and placed it in monitor status.",
		lastupdated: "06 Jul 2017, 22:30",
		discovered: "06 Jul 2017, 00:07"		
	};
	firemap.push(fire);
	fire = {
		designation: "Loper Creek",
		center: new google.maps.LatLng(65.6925, -145.5515),
		acreage: 2549.3,
		maintext: "Fire flown by Zone aircraft N309VS, personnel on board reported no visible smokes.",
		lastupdated: "09 Jul 2017, 10:49",
		discovered: "27 Jun 2017, 06:51"		
	};
	firemap.push(fire);
	fire = {
		designation: "WL 543T",
		center: new google.maps.LatLng(67.0030278, -144.6955833),
		acreage: 1,
		maintext: "The fire was discovered by zone aircraft N222ME during a detection flight. Personnel on board reported a 1 acre fire, 100 percent active, burning on flat terrain in black spruce. The fire plotted in a Limited suppression area and no values at risk were identified. The Upper Yukon Zone will continue to monitor this fire with aerial resources.",
		lastupdated: "14 Jul 2017, 01:39",
		discovered: "13 Jul 2017, 09:15"		
	};
	firemap.push(fire);
	fire = {
		designation: "George Lake Hills",
		center: new google.maps.LatLng(63.75, -144.316667),
		acreage: 0,
		maintext: "A small column of smoke was reported to the duty officer around 22:30 on 7/12 by a resident on Sand Lake.  Helitack responded after the fog and mist lifted on 7/13.  The reporter could no longer see any smoke once helitack was launched.  Helicopter 873HL thoroughly scanned the area and did not find any blackened ground or smoke.  It is planned to search the area on 7/14 when the weather is forecasted to be warmer and clearer.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "13 Jul 2017, 00:10"		
	};
	firemap.push(fire);
	fire = {
		designation: "Rat Creek",
		center: new google.maps.LatLng(66.8833333, -142.4833333),
		acreage: 11757.7,
		maintext: "Zone surveillance aircraft N22ME flew the fire and reported the perimeter to be 5% active, smoldering in tundra. No change is size was observed.",
		lastupdated: "10 Jul 2017, 13:51",
		discovered: "29 Jun 2017, 05:11"		
	};
	firemap.push(fire);
	fire = {
		designation: "Lois Creek",
		center: new google.maps.LatLng(68.2916667, -142.0123333),
		acreage: 27629.4,
		maintext: "Zone aircraft N222ME flew the fire and reported a 10 percent active perimeter.  Active burning was observed on the NE, NW and SE corners of the fire.  The fire continues to burn north of the Colleen River and west of Lois Creek.  Increase in acres reflects newer perimeter data.",
		lastupdated: "13 Jul 2017, 10:40",
		discovered: "02 Jul 2017, 09:28"		
	};
	firemap.push(fire);
	fire = {
		designation: "Pastolik",
		center: new google.maps.LatLng(62.7103889, -163.032),
		acreage: 11.5,
		maintext: "Increase in acreage due to more accurate mapping",
		lastupdated: "27 Jun 2017, 04:16",
		discovered: "08 Jun 2017, 12:44"		
	};
	firemap.push(fire);
	fire = {
		designation: "Khotol",
		center: new google.maps.LatLng(64.3261111, -158.2422222),
		acreage: 514.5,
		maintext: "Resources are facing a very active fire while protecting a cabin and 2 allotments.  Eight smokejumpers have been placed on the eastern portion of the allotments and are planning to burn out the area either late tonight or in the morning. The remaining 8 smokejumpers are prepping the rest of the allotments with hose lay and plumbing.  Zone aircraft H-361EH assisted the fire with supplies and bucket drops while N864SF assisted the smokejumpers on the ground with aerial observations and updates of the fire activity.  Depending on the success of the burnout operations, the fire could be mopped up within a few days time.",
		lastupdated: "14 Jul 2017, 01:05",
		discovered: "06 Jun 2017, 10:05"		
	};
	firemap.push(fire);
	fire = {
		designation: "Ball Creek",
		center: new google.maps.LatLng(62.468167, -157.64295),
		acreage: 13924,
		maintext: "The fire was flown by 904AK.  Personnel observed no activity and the fire remains in monitor status.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "04 Jun 2017, 12:53"		
	};
	firemap.push(fire);
	fire = {
		designation: "Narvak Lake",
		center: new google.maps.LatLng(66.946, -155.6475),
		acreage: 491.6,
		maintext: "Updated acreage due to more accurate mapping.",
		lastupdated: "11 Jul 2017, 12:09",
		discovered: "27 Jun 2017, 12:15"		
	};
	firemap.push(fire);
	fire = {
		designation: "North Robertson",
		center: new google.maps.LatLng(63.527733, -143.916883),
		acreage: 832,
		maintext: "The fire was flown today, no smokes were seen. The fire will remain in monitor status.",
		lastupdated: "28 Jun 2017, 20:00",
		discovered: "01 Jun 2017, 02:21"		
	};
	firemap.push(fire);
	fire = {
		designation: "Seven Mile",
		center: new google.maps.LatLng(65.4047778, -142.4603889),
		acreage: 135.8,
		maintext: "Zone surveillance in aircraft N222ME flew the fire and reported a 5 percent active perimeter, smoldering along the ridgetop. No additional growth was visible. The fire remained 2.15 miles northeast of a National Park Service cabin. Decrease in acreage due to more accurate mapping.",
		lastupdated: "13 Jul 2017, 07:25",
		discovered: "29 Jun 2017, 07:08"		
	};
	firemap.push(fire);
	fire = {
		designation: "North Fork",
		center: new google.maps.LatLng(64.202, -159.9615),
		acreage: 306.8,
		maintext: "N864SF flew the fire and observed there to be no smokes showing.The fire will remain in monitor status",
		lastupdated: "27 Jun 2017, 07:27",
		discovered: "06 Jun 2017, 12:10"		
	};
	firemap.push(fire);
	fire = {
		designation: "Bell Creek",
		center: new google.maps.LatLng(61.918633, -158.081667),
		acreage: 2653,
		maintext: "The fire was flown by 35E.  No activity was observed and the fire remains in monitor status.",
		lastupdated: "13 Jul 2017, 20:03",
		discovered: "04 Jun 2017, 11:05"		
	};
	firemap.push(fire);
	fire = {
		designation: "Kihovilik Creek",
		center: new google.maps.LatLng(66.6346667, -157.1596667),
		acreage: 3130,
		maintext: "Identified areas of growth using Landsat 8 image acquired 7/11 @ 2300.  Updated size to 3130 acres.",
		lastupdated: "12 Jul 2017, 11:54",
		discovered: "27 Jun 2017, 13:15"		
	};
	firemap.push(fire);
	fire = {
		designation: "Larsen Creek",
		center: new google.maps.LatLng(65.4581667, -151.1717778),
		acreage: 90,
		maintext: "Zone surveillance in aircraft N309VS flew the fire and reported no active perimeter. The western interior of the fire was smoldering.",
		lastupdated: "13 Jul 2017, 11:35",
		discovered: "04 Jul 2017, 08:03"		
	};
	firemap.push(fire);
	fire = {
		designation: "Potholes",
		center: new google.maps.LatLng(63.912, -146.0013333),
		acreage: 0.2,
		maintext: "Zone detection aircraft N700FW flew the fire area today. Smoke observed in the northeast corner of the 1/4 acre. No change in size.",
		lastupdated: "30 Jun 2017, 12:49",
		discovered: "28 Jun 2017, 11:02"		
	};
	firemap.push(fire);
	fire = {
		designation: "Monument Creek",
		center: new google.maps.LatLng(68.062, -143.8425833),
		acreage: 426.8,
		maintext: "Fire was flown by zone detection aircraft N222ME and no visible smoke or active perimeter was observed. Update in acreage is due to more accurate mapping.",
		lastupdated: "13 Jul 2017, 11:16",
		discovered: "05 Jul 2017, 07:22"		
	};
	firemap.push(fire);
	fire = {
		designation: "Lake Creek",
		center: new google.maps.LatLng(67.5075, -142.1595),
		acreage: 2228.8,
		maintext: "Zone surveillance aircraft N22ME flew the fire and reported no activity. Observations were taken under clear skies.",
		lastupdated: "13 Jul 2017, 11:08",
		discovered: "02 Jul 2017, 08:07"		
	};
	firemap.push(fire);

	
	// we would like circles for the larger fires, and markers for all
	var fireCircle;
	var fireMarker;
	function getIcon(acreage) {
	    if (acreage < 10) { return 'images/mm_20_blue.png'; }
	    else if (acreage < 250) { return 'images/ltblue-dot.png'; }
	    else if (acreage < 2500) { return 'images/yellow-dot.png'; }
	    else { return 'images/red-dot.png'; }
	}
	// function called to initialize the drawing of the fire data overlay on the Google map
	function initialize() {
		var centerAlaskaLatLng = new google.maps.LatLng(64.5, -151);
		var myOptions = {
			zoom: 6,
			center: centerAlaskaLatLng,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			scaleControl: true
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),
		    myOptions);
		for (var fire=0; fire<firemap.length; fire++) {
		// For large fires.construct the circle for each value in fire.
			if (firemap[fire].acreage >= 250) {
				var fireOptions = {
					strokeColor: "#FF0000",
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: "#FF0000",
					fillOpacity: 0.35,
					map: map,
					center: firemap[fire].center,
					radius: Math.sqrt(firemap[fire].acreage*4046.85642/Math.PI)
				};
				fireCircle = new google.maps.Circle(fireOptions);
			}
			var contentString = '<div id="content">' +
			    '<div id="siteNotice">' +
			    '</div>' +
			    '<h4 id="firstHeading" class="firstHeading">'+
				firemap[fire].designation +
				' fire</h4>' +
			    '<div id="bodyContent"><p>Discovered: ' +
				firemap[fire].discovered +
				'<br/>Last updated: ' +
				firemap[fire].lastupdated +
				'<br/>' +
				firemap[fire].acreage +
				' acres</p><p>' +
				firemap[fire].maintext +
			    '</p></div>'+
			    '</div>';
			var infowindow = new google.maps.InfoWindow({
				maxWidth: 300
			});
			fireMarker = new google.maps.Marker({
			    position: firemap[fire].center,
			    map: map,
			    title: firemap[fire].designation,
				html: contentString,
				icon: getIcon(firemap[fire].acreage)
			});
			google.maps.event.addListener(fireMarker, 'click', function() {
				infowindow.setContent(this.html);
				infowindow.open(map,this);
			});
		}
	};
	// calling initialize when the document's DOM is ready
	initialize();

    // some more bits of text on the page that are being filled in client-side
	var lastupdatedtext = "Last updated: 14 Jul 2017, 11:59.";
	$("span#jslastupdated").text(lastupdatedtext);
	var numfirestext = ", which is currently tracking " + firemap.length + " fires in Alaska (active, smoldering or in the process of being demobilized)";
	$("#jsnumfires").text(numfirestext);
});
