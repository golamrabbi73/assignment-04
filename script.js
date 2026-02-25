let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

// count 
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectionCount = document.getElementById('rejection-count');


// three filter button
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCards = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section')

// count calculation function
function countCalculation(){
    totalCount.innerText = allCards.children.length
    interviewCount.innerText = interviewList.length
    rejectionCount.innerText = rejectedList.length
}
countCalculation()

// tab toggling
function toggleStyle(id){

    // adding base bg for all
    allFilterBtn.classList.add('bg-base-100', 'text-gray-500')
    interviewFilterBtn.classList.add('bg-base-100', 'text-gray-500')
    rejectedFilterBtn.classList.add('bg-base-100', 'text-gray-500')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    const selected = document.getElementById(id);
    currentStatus = id

    // adding black for selected button
    selected.classList.remove('bg-base-100', 'text-gray-500');
    selected.classList.add('bg-blue-500', 'text-white');

    // filtering
    if(id == 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview()
    }else if(id == 'all-filter-btn'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id == 'rejected-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected()
    }
}


mainContainer.addEventListener('click', function (event){
    const clickElement = event.target;
    if(clickElement.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const positionName = parentNode.querySelector('.position').innerText;
        const deleteBtn = parentNode.querySelector('.delete-btn').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const status = parentNode.querySelector('.job-status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.job-status').innerText = 'Interviewed'

        const cardInfo = {
            companyName,
            positionName,
            deleteBtn,
            jobInfo,
            status : 'Interviewed',
            description
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if(!companyExist){
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        countCalculation()

        if(currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }
    }else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company-name').innerText;
        const positionName = parentNode.querySelector('.position').innerText;
        const deleteBtn = parentNode.querySelector('.delete-btn').innerText;
        const jobInfo = parentNode.querySelector('.job-info').innerText;
        const status = parentNode.querySelector('.job-status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.job-status').innerText = 'Rejected'

        const cardInfo = {
            companyName,
            positionName,
            deleteBtn,
            jobInfo,
            status : 'Rejected',
            description
        }

    const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

    if(!companyExist){
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

    if(currentStatus == "interview-filter-btn"){
        renderInterview();
    }

    countCalculation()
    
    }

})

// interview render function
function renderInterview(){
    filterSection.innerHTML = ''

    for(let interview of interviewList ){
        let div = document.createElement('div');
        div.className = 'flex flex-col gap-4'
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-6">
                    <div class="flex justify-between">
                        <div>
                            <h2 class="company-name font-bold text-2xl mb-1">${interview.companyName}</h2>
                            <p class="position text-gray-500">React Native Developer</p>
                        </div>
                        <button class=" delete-btn btn btn-circle"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="my-5">
                        <p class="job-info text-gray-500 text-[15px]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="mb-5">
                        <p class="job-status w-30  bg-blue-50 text-gray-800 px-3 py-2 rounded text-[14px] font-medium uppercase mb-1">${interview.status}</p>
                        <p class="description text-gray-700 text-[15px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="btn interview-btn  btn-outline btn-success uppercase mr-2">Interview</button>
                        <button class="btn rejected-btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div)
    }
}

// rejected render function
function renderRejected(){
    filterSection.innerHTML = ''

    for(let rejected of rejectedList ){
        let div = document.createElement('div');
        div.className = 'flex flex-col gap-4'
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-6">
                    <div class="flex justify-between">
                        <div>
                            <h2 class="company-name font-bold text-2xl mb-1">${rejected.companyName}</h2>
                            <p class="position text-gray-500">React Native Developer</p>
                        </div>
                        <button class=" delete-btn btn btn-circle"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="my-5">
                        <p class="job-info text-gray-500 text-[15px]">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div class="mb-5">
                        <p class="job-status w-30  bg-blue-50 text-gray-800 px-3 py-2 rounded text-[14px] font-medium uppercase mb-1">${rejected.status}</p>
                        <p class="description text-gray-700 text-[15px]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div>
                        <button class="btn interview-btn  btn-outline btn-success uppercase mr-2">Interview</button>
                        <button class="btn rejected-btn btn-outline btn-error uppercase">Rejected</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div)
    }
}