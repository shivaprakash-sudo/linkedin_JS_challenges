function getStudents(classroom) {
    const { hasTeachingAssistant, classMembers } = classroom;
    let teacher, teachingAssistant, students;
    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classMembers;
    } else {
        [teacher, ...students] = classMembers;
    }
    return students;
}

const students = getStudents(
    {
        hasTeachingAssistant: false,
        classMembers: ["Shiva", "Niketh", "Hamish", "Lolly"]
    });

console.log(students);