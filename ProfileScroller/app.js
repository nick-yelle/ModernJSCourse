const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'Female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/med/men/55.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/med/women/55.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingFor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/med/men/54.jpg'
    }
];

const profile = profileIterator(data);

// Call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profile.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Age: ${currentProfile.age}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">Preferences: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}