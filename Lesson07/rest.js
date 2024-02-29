const studentGroup1 = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];

const studentGroup2 = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    }
];


function findMax(...values) {
    return values.reduce((max, value) => {
        if (value > max) {
            return value;
        }
        return max;
    }, -Infinity);
}

const group1 = studentGroup1.map((student) => student.practiceTime);
const group2 = studentGroup2.map((student) => student.practiceTime);


const maxTimeFromGroup1 = findMax(...group1);
const maxTimeFromGroup2 = findMax(...group2);

console.log("group1:", maxTimeFromGroup1);
console.log("group2:", maxTimeFromGroup2);

const bothGroups = [...group1, ...group2];
const maxTimeFromAllGroups = findMax(...bothGroups);
console.log("In all groups:", maxTimeFromAllGroups);
