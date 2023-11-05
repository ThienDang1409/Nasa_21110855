const launches  = new Map();

const launch = {
    fightNumber: 100,
    misson: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler -442 b',
    customer:['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.fightNumber, launch);

module.exports = {
    launches,
};