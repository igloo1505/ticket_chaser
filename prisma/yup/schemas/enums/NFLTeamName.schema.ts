import * as Yup from 'yup';

export const NFLTeamNameSchema = Yup.mixed().oneOf(["Cardinals","Falcons","Ravens","Bills","Panthers","Bengals","Bears","Browns","Cowboys","Broncos","Lions","Texans","Packers","Colts","Rams","Jaguars","Vikings","Chiefs","Saints","Raiders","Giants","Chargers","Eagles","Dolphins","FourtyNiners","Patriots","Seahawks","Jets","Buccaneers","Steelers","Commanders","Titans"])