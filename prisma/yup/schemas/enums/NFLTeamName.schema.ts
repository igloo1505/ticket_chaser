import * as Yup from 'yup';

export const NFLTeamNameSchema = Yup.mixed().oneOf(["Packers","Patriots","Bears","Panthers","Jaguars","Dolphins","Niners","Texans","Saints","Vikings","Broncos","Chargers","Rams","Colts","Raiders"])