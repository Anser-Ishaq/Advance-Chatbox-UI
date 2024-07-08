const groupNamesByFirstLetter = (data) => {
    console.log('Starting groupNamesByFirstLetter function...');

    const groupedData = {};

    data.forEach((item) => {
        const firstLetter = item.name[0].toUpperCase();
        console.log(`Processing item: ${item.name}, First letter: ${firstLetter}`);

        if (!groupedData[firstLetter]) {
            groupedData[firstLetter] = [];
            console.log(`Creating new group for letter ${firstLetter}`);
        }

        groupedData[firstLetter].push(item);
        console.log(`Adding item ${item.name} to group ${firstLetter}`);
    });

    console.log('Grouped data before sorting:', groupedData);

    const sortedData = Object.keys(groupedData)
        .sort()
        .map((letter) => {
            const sortedGroup = groupedData[letter].sort((a, b) => a.name.localeCompare(b.name));
            console.log(`Sorting group for letter ${letter}:`, sortedGroup);
            return {
                letter,
                data: sortedGroup,
            };
        });

    console.log('Final sorted data:', sortedData);

    console.log('groupNamesByFirstLetter function complete.');
    return sortedData;
};

const data = [
    { id: '2', name: 'Alex Linderson', image: require('../../assets/bluepic.png'), sub: 'Life is beautiful 👌', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '3', name: 'Ali Haider', image: require('../../assets/3.png'), sub: 'Be your own hero 💪', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '4', name: 'Abraham', image: require('../../assets/1.png'), sub: 'Keep working ✍', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '5', name: 'Bristy Hoque', image: require('../../assets/2.png'), sub: 'Flowers are beautiful 🌸', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '6', name: 'Borino John', image: require('../../assets/4.png'), sub: 'Make yourself proud 😍', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '7', name: 'Sohail Ali', image: require('../../assets/5.png'), sub: 'Keep working ✍', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '8', name: 'Shehri', image: require('../../assets/1.png'), sub: 'Life is beautiful 👌', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '9', name: 'Sammar', image: require('../../assets/3.png'), sub: 'Flowers are beautiful 🌸', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
    { id: '10', name: 'Sabila Sayma', image: require('../../assets/2.png'), sub: 'Make yourself proud 😍', call: require('../../assets/call.png'), video: require('../../assets/video.png') },
];

const groupedData = groupNamesByFirstLetter(data);
console.log('Final grouped data:', groupedData);
