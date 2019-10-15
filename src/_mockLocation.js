import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accruacy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -117.2081 + increment * tenMetersWithDegrees,
            latitude: 32.9001 + increment * tenMetersWithDegrees
        }
    }
};

let counter = 0;
setInterval(()=> {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++
}, 1000)