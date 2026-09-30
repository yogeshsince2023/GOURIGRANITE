import { Product, Factory, Owner, ClientLocation, StoneItem } from './types';
export type { StoneItem } from './types';

export const CATEGORIES = ['All', 'Granite', 'Marble & Quartz'] as const;
export type StoneCategory = typeof CATEGORIES[number];

// All stones with category classification
export const ALL_STONES: StoneItem[] = [
    {
        "id": "granite_1",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_1.jpg",
        "category": "Granite",
        "title": "Granite #1"
    },
    {
        "id": "granite_2",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_2.jpg",
        "category": "Granite",
        "title": "Granite #2"
    },
    {
        "id": "granite_3",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_3.jpg",
        "category": "Granite",
        "title": "Granite #3"
    },
    {
        "id": "granite_4",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760445/granite_4.jpg",
        "category": "Granite",
        "title": "Granite #4"
    },
    {
        "id": "granite_5",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760454/granite_5.jpg",
        "category": "Granite",
        "title": "Granite #5"
    },
    {
        "id": "granite_6",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760471/granite_6.jpg",
        "category": "Granite",
        "title": "Granite #6"
    },
    {
        "id": "granite_7",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760484/granite_7.jpg",
        "category": "Granite",
        "title": "Granite #7"
    },
    {
        "id": "granite_8",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_8.jpg",
        "category": "Granite",
        "title": "Granite #8"
    },
    {
        "id": "granite_9",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_9.jpg",
        "category": "Granite",
        "title": "Granite #9"
    },
    {
        "id": "granite_10",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_10.jpg",
        "category": "Granite",
        "title": "Granite #10"
    },
    {
        "id": "granite_11",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_11.jpg",
        "category": "Granite",
        "title": "Granite #11"
    },
    {
        "id": "granite_12",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760387/granite_12.jpg",
        "category": "Granite",
        "title": "Granite #12"
    },
    {
        "id": "granite_13",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_13.jpg",
        "category": "Granite",
        "title": "Granite #13"
    },
    {
        "id": "granite_14",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760386/granite_14.jpg",
        "category": "Granite",
        "title": "Granite #14"
    },
    {
        "id": "granite_15",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760412/granite_15.jpg",
        "category": "Granite",
        "title": "Granite #15"
    },
    {
        "id": "granite_16",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760391/granite_16.jpg",
        "category": "Granite",
        "title": "Granite #16"
    },
    {
        "id": "granite_17",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_17.jpg",
        "category": "Granite",
        "title": "Granite #17"
    },
    {
        "id": "granite_18",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_18.jpg",
        "category": "Granite",
        "title": "Granite #18"
    },
    {
        "id": "granite_19",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760400/granite_19.jpg",
        "category": "Granite",
        "title": "Granite #19"
    },
    {
        "id": "granite_20",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_20.jpg",
        "category": "Granite",
        "title": "Granite #20"
    },
    {
        "id": "granite_21",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_21.jpg",
        "category": "Granite",
        "title": "Granite #21"
    },
    {
        "id": "granite_22",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760431/granite_22.jpg",
        "category": "Granite",
        "title": "Granite #22"
    },
    {
        "id": "granite_23",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_23.jpg",
        "category": "Granite",
        "title": "Granite #23"
    },
    {
        "id": "granite_24",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_24.jpg",
        "category": "Granite",
        "title": "Granite #24"
    },
    {
        "id": "granite_25",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_25.jpg",
        "category": "Granite",
        "title": "Granite #25"
    },
    {
        "id": "granite_26",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_26.jpg",
        "category": "Granite",
        "title": "Granite #26"
    },
    {
        "id": "granite_27",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_27.jpg",
        "category": "Granite",
        "title": "Granite #27"
    },
    {
        "id": "granite_28",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_28.jpg",
        "category": "Granite",
        "title": "Granite #28"
    },
    {
        "id": "granite_29",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_29.jpg",
        "category": "Granite",
        "title": "Granite #29"
    },
    {
        "id": "granite_30",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_30.jpg",
        "category": "Granite",
        "title": "Granite #30"
    },
    {
        "id": "granite_31",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_31.jpg",
        "category": "Granite",
        "title": "Granite #31"
    },
    {
        "id": "granite_32",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_32.jpg",
        "category": "Granite",
        "title": "Granite #32"
    },
    {
        "id": "granite_33",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_33.jpg",
        "category": "Granite",
        "title": "Granite #33"
    },
    {
        "id": "granite_34",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_34.jpg",
        "category": "Granite",
        "title": "Granite #34"
    },
    {
        "id": "granite_35",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_35.jpg",
        "category": "Granite",
        "title": "Granite #35"
    },
    {
        "id": "granite_36",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760441/granite_36.jpg",
        "category": "Granite",
        "title": "Granite #36"
    },
    {
        "id": "granite_37",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_37.jpg",
        "category": "Granite",
        "title": "Granite #37"
    },
    {
        "id": "granite_38",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_38.jpg",
        "category": "Granite",
        "title": "Granite #38"
    },
    {
        "id": "granite_39",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_39.jpg",
        "category": "Granite",
        "title": "Granite #39"
    },
    {
        "id": "granite_40",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_40.jpg",
        "category": "Granite",
        "title": "Granite #40"
    },
    {
        "id": "granite_41",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760450/granite_41.jpg",
        "category": "Granite",
        "title": "Granite #41"
    },
    {
        "id": "granite_42",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760448/granite_42.jpg",
        "category": "Granite",
        "title": "Granite #42"
    },
    {
        "id": "granite_43",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760449/granite_43.jpg",
        "category": "Granite",
        "title": "Granite #43"
    },
    {
        "id": "granite_44",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_44.jpg",
        "category": "Granite",
        "title": "Granite #44"
    },
    {
        "id": "granite_45",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_45.jpg",
        "category": "Granite",
        "title": "Granite #45"
    },
    {
        "id": "granite_47",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760458/granite_47.jpg",
        "category": "Granite",
        "title": "Granite #47"
    },
    {
        "id": "granite_48",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760453/granite_48.jpg",
        "category": "Granite",
        "title": "Granite #48"
    },
    {
        "id": "granite_49",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760460/granite_49.jpg",
        "category": "Granite",
        "title": "Granite #49"
    },
    {
        "id": "granite_50",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_50.jpg",
        "category": "Granite",
        "title": "Granite #50"
    },
    {
        "id": "granite_51",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760461/granite_51.jpg",
        "category": "Granite",
        "title": "Granite #51"
    },
    {
        "id": "granite_53",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760467/granite_53.jpg",
        "category": "Granite",
        "title": "Granite #53"
    },
    {
        "id": "granite_54",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_54.jpg",
        "category": "Granite",
        "title": "Granite #54"
    },
    {
        "id": "granite_55",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760470/granite_55.jpg",
        "category": "Granite",
        "title": "Granite #55"
    },
    {
        "id": "granite_56",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_56.jpg",
        "category": "Granite",
        "title": "Granite #56"
    },
    {
        "id": "granite_57",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760481/granite_57.jpg",
        "category": "Granite",
        "title": "Granite #57"
    },
    {
        "id": "granite_58",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760469/granite_58.jpg",
        "category": "Granite",
        "title": "Granite #58"
    },
    {
        "id": "granite_59",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760476/granite_59.jpg",
        "category": "Granite",
        "title": "Granite #59"
    },
    {
        "id": "granite_60",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_60.jpg",
        "category": "Granite",
        "title": "Granite #60"
    },
    {
        "id": "granite_61",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_61.jpg",
        "category": "Granite",
        "title": "Granite #61"
    },
    {
        "id": "granite_62",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760477/granite_62.jpg",
        "category": "Granite",
        "title": "Granite #62"
    },
    {
        "id": "granite_63",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760478/granite_63.jpg",
        "category": "Granite",
        "title": "Granite #63"
    },
    {
        "id": "marble-quartz_01",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_01.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #1"
    },
    {
        "id": "marble-quartz_02",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_02.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #2"
    },
    {
        "id": "marble-quartz_03",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_03.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #3"
    },
    {
        "id": "marble-quartz_04",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_04.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #4"
    },
    {
        "id": "marble-quartz_05",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_05.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #5"
    },
    {
        "id": "marble-quartz_06",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_06.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #6"
    },
    {
        "id": "marble-quartz_07",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_07.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #7"
    },
    {
        "id": "marble-quartz_08",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_08.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #8"
    },
    {
        "id": "marble-quartz_09",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_09.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #9"
    },
    {
        "id": "marble-quartz_10",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_10.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #10"
    },
    {
        "id": "marble-quartz_11",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_11.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #11"
    },
    {
        "id": "marble-quartz_12",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760277/marble-quartz_12.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #12"
    },
    {
        "id": "marble-quartz_13",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_13.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #13"
    },
    {
        "id": "marble-quartz_14",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_14.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #14"
    },
    {
        "id": "marble-quartz_15",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760285/marble-quartz_15.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #15"
    },
    {
        "id": "marble-quartz_16",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760288/marble-quartz_16.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #16"
    },
    {
        "id": "marble-quartz_17",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760279/marble-quartz_17.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #17"
    },
    {
        "id": "marble-quartz_18",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760280/marble-quartz_18.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #18"
    },
    {
        "id": "marble-quartz_19",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_19.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #19"
    },
    {
        "id": "marble-quartz_20",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760282/marble-quartz_20.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #20"
    },
    {
        "id": "marble-quartz_21",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_21.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #21"
    },
    {
        "id": "marble-quartz_22",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_22.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #22"
    },
    {
        "id": "marble-quartz_23",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_23.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #23"
    },
    {
        "id": "marble-quartz_24",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_24.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #24"
    },
    {
        "id": "marble-quartz_25",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_25.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #25"
    },
    {
        "id": "marble-quartz_26",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_26.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #26"
    },
    {
        "id": "marble-quartz_27",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_27.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #27"
    },
    {
        "id": "marble-quartz_28",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_28.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #28"
    },
    {
        "id": "marble-quartz_29",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760327/marble-quartz_29.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #29"
    },
    {
        "id": "marble-quartz_30",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760328/marble-quartz_30.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #30"
    },
    {
        "id": "marble-quartz_31",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_31.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #31"
    },
    {
        "id": "marble-quartz_32",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_32.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #32"
    },
    {
        "id": "marble-quartz_33",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_33.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #33"
    },
    {
        "id": "marble-quartz_34",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_34.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #34"
    },
    {
        "id": "marble-quartz_35",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_35.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #35"
    },
    {
        "id": "marble-quartz_36",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_36.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #36"
    },
    {
        "id": "marble-quartz_37",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_37.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #37"
    },
    {
        "id": "marble-quartz_38",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_38.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #38"
    },
    {
        "id": "marble-quartz_39",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_39.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #39"
    },
    {
        "id": "marble-quartz_40",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_40.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #40"
    },
    {
        "id": "marble-quartz_41",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760333/marble-quartz_41.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #41"
    },
    {
        "id": "marble-quartz_42",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_42.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #42"
    },
    {
        "id": "marble-quartz_43",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_43.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #43"
    },
    {
        "id": "marble-quartz_44",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_44.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #44"
    },
    {
        "id": "marble-quartz_45",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_45.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #45"
    },
    {
        "id": "marble-quartz_46",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_46.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #46"
    },
    {
        "id": "marble-quartz_47",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_47.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #47"
    }
];

// Category specific stones
export const GRANITE_STONES: StoneItem[] = [
    {
        "id": "granite_1",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_1.jpg",
        "category": "Granite",
        "title": "Granite #1"
    },
    {
        "id": "granite_2",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_2.jpg",
        "category": "Granite",
        "title": "Granite #2"
    },
    {
        "id": "granite_3",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_3.jpg",
        "category": "Granite",
        "title": "Granite #3"
    },
    {
        "id": "granite_4",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760445/granite_4.jpg",
        "category": "Granite",
        "title": "Granite #4"
    },
    {
        "id": "granite_5",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760454/granite_5.jpg",
        "category": "Granite",
        "title": "Granite #5"
    },
    {
        "id": "granite_6",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760471/granite_6.jpg",
        "category": "Granite",
        "title": "Granite #6"
    },
    {
        "id": "granite_7",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760484/granite_7.jpg",
        "category": "Granite",
        "title": "Granite #7"
    },
    {
        "id": "granite_8",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_8.jpg",
        "category": "Granite",
        "title": "Granite #8"
    },
    {
        "id": "granite_9",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_9.jpg",
        "category": "Granite",
        "title": "Granite #9"
    },
    {
        "id": "granite_10",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_10.jpg",
        "category": "Granite",
        "title": "Granite #10"
    },
    {
        "id": "granite_11",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_11.jpg",
        "category": "Granite",
        "title": "Granite #11"
    },
    {
        "id": "granite_12",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760387/granite_12.jpg",
        "category": "Granite",
        "title": "Granite #12"
    },
    {
        "id": "granite_13",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_13.jpg",
        "category": "Granite",
        "title": "Granite #13"
    },
    {
        "id": "granite_14",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760386/granite_14.jpg",
        "category": "Granite",
        "title": "Granite #14"
    },
    {
        "id": "granite_15",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760412/granite_15.jpg",
        "category": "Granite",
        "title": "Granite #15"
    },
    {
        "id": "granite_16",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760391/granite_16.jpg",
        "category": "Granite",
        "title": "Granite #16"
    },
    {
        "id": "granite_17",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_17.jpg",
        "category": "Granite",
        "title": "Granite #17"
    },
    {
        "id": "granite_18",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_18.jpg",
        "category": "Granite",
        "title": "Granite #18"
    },
    {
        "id": "granite_19",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760400/granite_19.jpg",
        "category": "Granite",
        "title": "Granite #19"
    },
    {
        "id": "granite_20",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_20.jpg",
        "category": "Granite",
        "title": "Granite #20"
    },
    {
        "id": "granite_21",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_21.jpg",
        "category": "Granite",
        "title": "Granite #21"
    },
    {
        "id": "granite_22",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760431/granite_22.jpg",
        "category": "Granite",
        "title": "Granite #22"
    },
    {
        "id": "granite_23",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_23.jpg",
        "category": "Granite",
        "title": "Granite #23"
    },
    {
        "id": "granite_24",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_24.jpg",
        "category": "Granite",
        "title": "Granite #24"
    },
    {
        "id": "granite_25",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_25.jpg",
        "category": "Granite",
        "title": "Granite #25"
    },
    {
        "id": "granite_26",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_26.jpg",
        "category": "Granite",
        "title": "Granite #26"
    },
    {
        "id": "granite_27",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_27.jpg",
        "category": "Granite",
        "title": "Granite #27"
    },
    {
        "id": "granite_28",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_28.jpg",
        "category": "Granite",
        "title": "Granite #28"
    },
    {
        "id": "granite_29",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_29.jpg",
        "category": "Granite",
        "title": "Granite #29"
    },
    {
        "id": "granite_30",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_30.jpg",
        "category": "Granite",
        "title": "Granite #30"
    },
    {
        "id": "granite_31",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_31.jpg",
        "category": "Granite",
        "title": "Granite #31"
    },
    {
        "id": "granite_32",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_32.jpg",
        "category": "Granite",
        "title": "Granite #32"
    },
    {
        "id": "granite_33",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_33.jpg",
        "category": "Granite",
        "title": "Granite #33"
    },
    {
        "id": "granite_34",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_34.jpg",
        "category": "Granite",
        "title": "Granite #34"
    },
    {
        "id": "granite_35",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_35.jpg",
        "category": "Granite",
        "title": "Granite #35"
    },
    {
        "id": "granite_36",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760441/granite_36.jpg",
        "category": "Granite",
        "title": "Granite #36"
    },
    {
        "id": "granite_37",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_37.jpg",
        "category": "Granite",
        "title": "Granite #37"
    },
    {
        "id": "granite_38",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_38.jpg",
        "category": "Granite",
        "title": "Granite #38"
    },
    {
        "id": "granite_39",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_39.jpg",
        "category": "Granite",
        "title": "Granite #39"
    },
    {
        "id": "granite_40",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_40.jpg",
        "category": "Granite",
        "title": "Granite #40"
    },
    {
        "id": "granite_41",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760450/granite_41.jpg",
        "category": "Granite",
        "title": "Granite #41"
    },
    {
        "id": "granite_42",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760448/granite_42.jpg",
        "category": "Granite",
        "title": "Granite #42"
    },
    {
        "id": "granite_43",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760449/granite_43.jpg",
        "category": "Granite",
        "title": "Granite #43"
    },
    {
        "id": "granite_44",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_44.jpg",
        "category": "Granite",
        "title": "Granite #44"
    },
    {
        "id": "granite_45",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_45.jpg",
        "category": "Granite",
        "title": "Granite #45"
    },
    {
        "id": "granite_47",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760458/granite_47.jpg",
        "category": "Granite",
        "title": "Granite #47"
    },
    {
        "id": "granite_48",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760453/granite_48.jpg",
        "category": "Granite",
        "title": "Granite #48"
    },
    {
        "id": "granite_49",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760460/granite_49.jpg",
        "category": "Granite",
        "title": "Granite #49"
    },
    {
        "id": "granite_50",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_50.jpg",
        "category": "Granite",
        "title": "Granite #50"
    },
    {
        "id": "granite_51",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760461/granite_51.jpg",
        "category": "Granite",
        "title": "Granite #51"
    },
    {
        "id": "granite_53",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760467/granite_53.jpg",
        "category": "Granite",
        "title": "Granite #53"
    },
    {
        "id": "granite_54",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_54.jpg",
        "category": "Granite",
        "title": "Granite #54"
    },
    {
        "id": "granite_55",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760470/granite_55.jpg",
        "category": "Granite",
        "title": "Granite #55"
    },
    {
        "id": "granite_56",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_56.jpg",
        "category": "Granite",
        "title": "Granite #56"
    },
    {
        "id": "granite_57",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760481/granite_57.jpg",
        "category": "Granite",
        "title": "Granite #57"
    },
    {
        "id": "granite_58",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760469/granite_58.jpg",
        "category": "Granite",
        "title": "Granite #58"
    },
    {
        "id": "granite_59",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760476/granite_59.jpg",
        "category": "Granite",
        "title": "Granite #59"
    },
    {
        "id": "granite_60",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_60.jpg",
        "category": "Granite",
        "title": "Granite #60"
    },
    {
        "id": "granite_61",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_61.jpg",
        "category": "Granite",
        "title": "Granite #61"
    },
    {
        "id": "granite_62",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760477/granite_62.jpg",
        "category": "Granite",
        "title": "Granite #62"
    },
    {
        "id": "granite_63",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760478/granite_63.jpg",
        "category": "Granite",
        "title": "Granite #63"
    }
];
export const MARBLE_QUARTZ_STONES: StoneItem[] = [
    {
        "id": "marble-quartz_01",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_01.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #1"
    },
    {
        "id": "marble-quartz_02",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_02.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #2"
    },
    {
        "id": "marble-quartz_03",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_03.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #3"
    },
    {
        "id": "marble-quartz_04",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_04.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #4"
    },
    {
        "id": "marble-quartz_05",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_05.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #5"
    },
    {
        "id": "marble-quartz_06",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_06.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #6"
    },
    {
        "id": "marble-quartz_07",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_07.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #7"
    },
    {
        "id": "marble-quartz_08",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_08.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #8"
    },
    {
        "id": "marble-quartz_09",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_09.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #9"
    },
    {
        "id": "marble-quartz_10",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_10.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #10"
    },
    {
        "id": "marble-quartz_11",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_11.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #11"
    },
    {
        "id": "marble-quartz_12",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760277/marble-quartz_12.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #12"
    },
    {
        "id": "marble-quartz_13",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_13.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #13"
    },
    {
        "id": "marble-quartz_14",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_14.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #14"
    },
    {
        "id": "marble-quartz_15",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760285/marble-quartz_15.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #15"
    },
    {
        "id": "marble-quartz_16",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760288/marble-quartz_16.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #16"
    },
    {
        "id": "marble-quartz_17",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760279/marble-quartz_17.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #17"
    },
    {
        "id": "marble-quartz_18",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760280/marble-quartz_18.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #18"
    },
    {
        "id": "marble-quartz_19",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_19.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #19"
    },
    {
        "id": "marble-quartz_20",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760282/marble-quartz_20.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #20"
    },
    {
        "id": "marble-quartz_21",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_21.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #21"
    },
    {
        "id": "marble-quartz_22",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_22.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #22"
    },
    {
        "id": "marble-quartz_23",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_23.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #23"
    },
    {
        "id": "marble-quartz_24",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_24.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #24"
    },
    {
        "id": "marble-quartz_25",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_25.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #25"
    },
    {
        "id": "marble-quartz_26",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_26.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #26"
    },
    {
        "id": "marble-quartz_27",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_27.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #27"
    },
    {
        "id": "marble-quartz_28",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_28.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #28"
    },
    {
        "id": "marble-quartz_29",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760327/marble-quartz_29.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #29"
    },
    {
        "id": "marble-quartz_30",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760328/marble-quartz_30.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #30"
    },
    {
        "id": "marble-quartz_31",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_31.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #31"
    },
    {
        "id": "marble-quartz_32",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_32.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #32"
    },
    {
        "id": "marble-quartz_33",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_33.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #33"
    },
    {
        "id": "marble-quartz_34",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_34.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #34"
    },
    {
        "id": "marble-quartz_35",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_35.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #35"
    },
    {
        "id": "marble-quartz_36",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_36.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #36"
    },
    {
        "id": "marble-quartz_37",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_37.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #37"
    },
    {
        "id": "marble-quartz_38",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_38.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #38"
    },
    {
        "id": "marble-quartz_39",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_39.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #39"
    },
    {
        "id": "marble-quartz_40",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_40.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #40"
    },
    {
        "id": "marble-quartz_41",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760333/marble-quartz_41.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #41"
    },
    {
        "id": "marble-quartz_42",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_42.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #42"
    },
    {
        "id": "marble-quartz_43",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_43.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #43"
    },
    {
        "id": "marble-quartz_44",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_44.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #44"
    },
    {
        "id": "marble-quartz_45",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_45.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #45"
    },
    {
        "id": "marble-quartz_46",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_46.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #46"
    },
    {
        "id": "marble-quartz_47",
        "url": "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_47.jpg",
        "category": "Marble & Quartz",
        "title": "Marble & Quartz #47"
    }
];

// All unique gallery image URLs for backward compatibility
export const GALLERY_IMAGES: string[] = [
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_1.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_2.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_3.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760445/granite_4.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760454/granite_5.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760471/granite_6.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760484/granite_7.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_8.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_9.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_10.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_11.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760387/granite_12.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_13.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760386/granite_14.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760412/granite_15.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760391/granite_16.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_17.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_18.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760400/granite_19.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_20.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_21.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760431/granite_22.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_23.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_24.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_25.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_26.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_27.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_28.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_29.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_30.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_31.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_32.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_33.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_34.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_35.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760441/granite_36.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_37.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_38.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_39.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_40.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760450/granite_41.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760448/granite_42.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760449/granite_43.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_44.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_45.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760458/granite_47.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760453/granite_48.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760460/granite_49.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_50.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760461/granite_51.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760467/granite_53.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_54.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760470/granite_55.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_56.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760481/granite_57.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760469/granite_58.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760476/granite_59.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_60.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_61.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760477/granite_62.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760478/granite_63.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_01.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_02.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_03.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_04.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_05.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_06.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_07.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_08.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_09.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_10.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_11.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760277/marble-quartz_12.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_13.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_14.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760285/marble-quartz_15.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760288/marble-quartz_16.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760279/marble-quartz_17.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760280/marble-quartz_18.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_19.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760282/marble-quartz_20.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_21.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_22.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_23.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_24.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_25.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_26.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_27.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_28.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760327/marble-quartz_29.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760328/marble-quartz_30.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_31.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_32.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_33.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_34.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_35.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_36.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_37.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_38.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_39.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_40.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760333/marble-quartz_41.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_42.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_43.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_44.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_45.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_46.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_47.jpg"
];

// Category specific image URLs
export const GRANITE_IMAGES: string[] = [
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_1.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_2.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_3.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760445/granite_4.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760454/granite_5.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760471/granite_6.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760484/granite_7.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_8.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_9.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_10.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_11.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760387/granite_12.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760384/granite_13.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760386/granite_14.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760412/granite_15.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760391/granite_16.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_17.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_18.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760400/granite_19.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760404/granite_20.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_21.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760431/granite_22.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_23.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760432/granite_24.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_25.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760433/granite_26.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_27.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760435/granite_28.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_29.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_30.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760438/granite_31.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_32.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760439/granite_33.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760440/granite_34.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_35.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760441/granite_36.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_37.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760442/granite_38.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760444/granite_39.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_40.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760450/granite_41.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760448/granite_42.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760449/granite_43.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760451/granite_44.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_45.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760458/granite_47.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760453/granite_48.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760460/granite_49.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760462/granite_50.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760461/granite_51.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760467/granite_53.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_54.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760470/granite_55.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760475/granite_56.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760481/granite_57.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760469/granite_58.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760476/granite_59.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760479/granite_60.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760480/granite_61.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760477/granite_62.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760478/granite_63.jpg"
];
export const MARBLE_QUARTZ_IMAGES: string[] = [
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_01.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_02.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_03.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_04.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_05.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760269/marble-quartz_06.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_07.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_08.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760275/marble-quartz_09.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_10.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760276/marble-quartz_11.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760277/marble-quartz_12.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_13.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_14.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760285/marble-quartz_15.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760288/marble-quartz_16.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760279/marble-quartz_17.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760280/marble-quartz_18.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760281/marble-quartz_19.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760282/marble-quartz_20.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_21.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760283/marble-quartz_22.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760289/marble-quartz_23.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_24.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_25.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760311/marble-quartz_26.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_27.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760312/marble-quartz_28.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760327/marble-quartz_29.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760328/marble-quartz_30.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_31.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_32.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_33.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760329/marble-quartz_34.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_35.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760330/marble-quartz_36.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_37.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760331/marble-quartz_38.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_39.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760332/marble-quartz_40.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760333/marble-quartz_41.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_42.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_43.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760334/marble-quartz_44.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_45.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760335/marble-quartz_46.jpg",
    "https://res.cloudinary.com/qj1hesmj/image/upload/v1790760336/marble-quartz_47.jpg"
];

// Keep PRODUCTS for backward compatibility with other pages (product detail, etc.)
export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'Statuario Maximus',
        category: 'Marble',
        finish: 'Polished',
        dimensions: '3200 x 1600 mm',
        description: 'Premium white marble with bold grey veining, perfect for luxury interiors.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_01.jpg',
        factoryId: 'f1',
        featured: true,
        color: 'White',
        applications: ['Countertops', 'Wall Panels', 'Flooring'],
        altText: 'Statuario Maximus polished white marble slab with grey veining',
    },
    {
        id: 'p2',
        name: 'Black Galaxy',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Iconic deep black granite with gold speckles, durable and elegant.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760383/granite_1.jpg',
        factoryId: 'f2',
        featured: true,
        color: 'Black',
        applications: ['Countertops', 'Flooring', 'Cladding'],
        altText: 'Black Galaxy granite polished slab with gold mineral speckles',
    },
    {
        id: 'p3',
        name: 'Tan Brown',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Classic dark brown granite with black and reddish-brown flecks.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760393/granite_2.jpg',
        factoryId: 'f3',
        featured: false,
    },
    {
        id: 'p4',
        name: 'Absolute Black',
        category: 'Granite',
        finish: 'Honed',
        dimensions: '3200 x 1900 mm',
        description: 'The deepest, darkest black granite for a sleek modern look.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760436/granite_3.jpg',
        factoryId: 'f2',
        featured: true,
    },
    {
        id: 'p5',
        name: 'Rainforest Green',
        category: 'Marble',
        finish: 'Polished',
        dimensions: '2800 x 1500 mm',
        description: 'Exotic green marble with intricate brown branching veins.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760268/marble-quartz_02.jpg',
        factoryId: 'f1',
        featured: true,
    },
    {
        id: 'p6',
        name: 'Tan Brown Countertops',
        category: 'Granite',
        finish: 'Polished',
        dimensions: 'Custom',
        description: 'Exquisite Tan Brown Granite applied in luxury countertop settings.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760445/granite_4.jpg',
        factoryId: 'f3',
        featured: true,
    },
    {
        id: 'p7',
        name: 'Tan Brown (Slab)',
        category: 'Granite',
        finish: 'Polished',
        dimensions: '3000 x 1800 mm',
        description: 'Classic dark brown granite with black and reddish-brown flecks, showcasing an entire slab.',
        image: 'https://res.cloudinary.com/qj1hesmj/image/upload/v1790760454/granite_5.jpg',
        factoryId: 'f3',
        featured: true,
    }
];

export const FACTORIES: Factory[] = [
    {
        id: 'f1',
        name: 'Kishangarh Facilities – Gouri Marble Udhyog',
        location: 'Kishangarh, Kali Dungri, Rajasthan - 305801',
        coordinates: { lat: 26.5741, lng: 74.8601 },
        mapUrl: 'https://maps.app.goo.gl/ggibYwvYEDWYS5Yk8?g_st=aw',
        capacity: '80,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/factory1_uzv7wd.jpg',
        altText: 'Gouri Marble Udhyog manufacturing facility in Kishangarh, Rajasthan',
        yearEstablished: 2000,
        specialization: 'Marble',
        machinery: ['CNC Cutting Machines', 'Polishing Units', 'Calibrating Lines', 'Bundling Equipment'],
        certifications: ['Export House Certificate', 'Eco-Friendly Operations', 'Govt. Recognized']
    },
    {
        id: 'f2',
        name: 'Kishangarh – Gouri Granites (Ralawta)',
        location: 'Kishangarh, Ralawta, Rajasthan - 305801',
        coordinates: { lat: 26.5850, lng: 74.8720 },
        mapUrl: 'https://maps.app.goo.gl/HWKuyNAYBQkWXsd8A?g_st=aw',
        capacity: '95,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790198/factory2_gihyqc.jpg',
        altText: 'Gouri Granites state-of-the-art facility for granite processing',
        yearEstablished: 2005,
        specialization: 'Granite & Quartz',
        machinery: ['Multi-Saw Cutting Lines', 'High-Precision Edge Profilers', 'Waterjet Cutting', 'Flaming Equipment'],
        certifications: ['Export House Certificate', 'Bureau of Indian Standards', 'Govt. Recognized']
    },
    {
        id: 'f3',
        name: 'Karimnagar – Gouri Granito',
        location: 'Baopet, Karimnagar, Telangana - 505401',
        coordinates: { lat: 18.4386, lng: 78.4872 },
        mapUrl: 'https://maps.app.goo.gl/UpymoQSWa3gJERVs6?g_st=aw',
        capacity: '1,50,000 sq.ft / month',
        image: 'https://res.cloudinary.com/dvlapdn5x/image/upload/v1770790199/factory3_ulddda.jpg',
        altText: 'Gouri Granito advanced stone processing facility in Telangana',
        yearEstablished: 2010,
        specialization: 'Granite & Tiles',
        machinery: ['Large Format Saws', 'Grinding Machines', 'Tile Production Lines', 'Quality Control Systems'],
        certifications: ['Export House Certificate', 'Environmental Compliance', 'Govt. Recognized']
    }
];

export const CLIENT_LOCATIONS: ClientLocation[] = [
    { id: 'c1', country: 'United States', coordinates: { lat: 37.0902, lng: -95.7129 }, projectName: 'Luxury Hotel, NY' },
    { id: 'c2', country: 'UAE', coordinates: { lat: 23.4241, lng: 53.8478 }, projectName: 'Residential Tower, Dubai' },
    { id: 'c3', country: 'United Kingdom', coordinates: { lat: 55.3781, lng: -3.4360 }, projectName: 'Commercial Plaza, London' },
    { id: 'c4', country: 'Australia', coordinates: { lat: -25.2744, lng: 133.7751 }, projectName: 'Resort, Gold Coast' },
];

export const OWNERS: Owner[] = [
    {
        id: 'o1',
        name: 'Rajesh Gupta',
        role: 'Founder & CEO',
        bio: 'Over 30 years of experience in the natural stone industry, pioneering new extraction techniques.',
        image: 'https://placehold.co/300x300?text=RG'
    },
    {
        id: 'o2',
        name: 'Vikram Singh',
        role: 'Director of Exports',
        bio: 'Spearheading global expansion and ensuring international quality standards.',
        image: 'https://placehold.co/300x300?text=VS'
    }
];
