function showInfo(friend) { 
    // លាក់ព័ត៌មានអ្នកទាំងអស់
    const allItems = document.querySelectorAll('.menu-item');
    allItems.forEach(item => {
        item.style.display = 'none';
    });

    // បង្ហាញតែព័ត៌មានរបស់អ្នកដែលចុច
    const selectedFriend = document.getElementById(friend);
    if (selectedFriend) {
        selectedFriend.style.display = 'block';
    } else {
        console.error("ID '" + friend + "' not found.");
    }
}
