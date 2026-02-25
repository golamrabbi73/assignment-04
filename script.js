const totalCount = document.getElementById('total-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCards = document.getElementById('all-cards');

// count calculation function
function countCalculation(){
    totalCount.innerText = allCards.children.length;
}
countCalculation()

// tab toggling
function toggleStyle(id){
    allFilterBtn.classList.add('bg-base-100', 'text-gray-500')
    interviewFilterBtn.classList.add('bg-base-100', 'text-gray-500')
    rejectedFilterBtn.classList.add('bg-base-100', 'text-gray-500')

    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id);
    selected.classList.remove('bg-base-100', 'text-gray-500');
    selected.classList.add('bg-blue-500', 'text-white');
}