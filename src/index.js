let clients = document.getElementById('clients');
let clientsPage = document.getElementById('clientsPage');
let device = document.getElementById('device');
let emailLogin = document.getElementById('emailLogin');
let emailRegistration = document.getElementById('emailRegistration');
let exit = document.getElementById('exit');
let login = document.getElementById('login');
let loginError = document.getElementById('loginError');
let main = document.getElementById('main');
let mainPage = document.getElementById('mainPage');
let mapOnSite = document.getElementById('mapOnSite');
let mapPage = document.getElementById('mapPage');
let menu = document.getElementById('menu');
let passwordLogin = document.getElementById('passwordLogin');
let passwordRegistration = document.getElementById('passwordRegistration');
let registration = document.getElementById('registration');
let registrationError = document.getElementById('registrationError');
let repeatPasswordRegistration = document.getElementById('repeatPasswordRegistration');



function registrationOnSite(){
    login.style.display = 'none';
    registration.style.display = 'block';
}

function loginOnSite(){
    login.style.display = 'block';
    registration.style.display = 'none';
}

function exitOfSite(){
    login.style.display = 'block';
    registration.style.display = 'none';
    menu.style.display = 'none';
    exit.style.display = 'none';
    mainPage.style.display = 'none';
    mapPage.style.display = 'none';
    clientsPage.style.display = 'none';
    main.style.textDecoration = 'underline';
    clients.style.textDecoration = 'none';
    mapOnSite.style.textDecoration = 'none';
}


// проверка на валидность мэила
function checkMail(){
    let email = emailRegistration.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()) && null === localStorage.getItem(email)){
        emailRegistration.style.borderColor = 'green';
        // registrationError.innerHTML = ' ';
        return true; 
    }else if(!re.test(String(email).toLowerCase()) || null !== localStorage.getItem(email)){
        emailRegistration.style.borderColor = 'red';
        registrationError.innerHTML = 'такой пароль уже зарегистрирован';
        return false; 
    }
}


function checkPassword(){
    let password = passwordRegistration.value;
    console.log(password);
    if(password === ''){
        console.log('error');
        passwordRegistration.style.borderColor = 'red';
        return false;
    }else{
        console.log('right');
        passwordRegistration.style.borderColor = 'green';
        return true; 
    }
}


function comparisonOfTwoPasswords(){
    var one = passwordRegistration.value;
    var two = repeatPasswordRegistration.value;
    if(one == two) { 
        repeatPasswordRegistration.style.borderColor = 'green';
        return true; 
    }else{
        repeatPasswordRegistration.style.borderColor = 'red';
        return false;
    }
}

function checkValidationForm(){
    if (checkMail() == true && checkPassword() == true && comparisonOfTwoPasswords() == true){
        console.log('mail true');
        function signIn(){
                login.style.display = 'none';
                registration.style.display = 'none';
                mainPage.style.display = 'block';
                mapPage.style.display = 'none';
                menu.style.display = 'flex';
                exit.style.display = 'block';
                main.style.textDecoration = 'underline';
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    device.innerHTML = 'mobile';
                  } else {
                    device.innerHTML = 'PC';
                }
        }

        function keepUser(){
            let mail = emailRegistration.value;
            let password = passwordRegistration.value;
            localStorage.setItem(mail, password);
            console.log(localStorage.getItem(mail));
            console.log(localStorage.length);
        }
        signIn();
        keepUser();
    }else{
        console.log('mail false');
    }
}


//проверка email зареган уже или нет
function checkLoginUser(){
    let userLogin = emailLogin.value;
    let userPassword = passwordLogin.value;
    if(localStorage.getItem(userLogin) !== null){
        console.log('такой email есть в localstorage');
        if(userPassword === localStorage.getItem(userLogin)){
            function signIn(){
                login.style.display = 'none';
                registration.style.display = 'none';
                mainPage.style.display = 'block';
                mapPage.style.display = 'none';
                menu.style.display = 'flex';
                exit.style.display = 'block';
                main.style.textDecoration = 'underline';
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    device.innerHTML = 'mobile';
                  } else {
                    device.innerHTML = 'PC';
                }
            }
        signIn();
        }else{
            console.log('неправильный пароль');
            loginError.innerHTML = 'неправильный пароль';
        }
    }else{
        loginError.innerHTML = 'такой email не зарегистрирован';
    }
}

// подсветка и работа менюшки
function openMainPage(){
    mainPage.style.display = 'block';
    clientsPage.style.display = 'none';
    mapPage.style.display = 'none';
    main.style.textDecoration = 'underline';
    clients.style.textDecoration = 'none';
    mapOnSite.style.textDecoration = 'none';
}

function openClientsPage(){
    mainPage.style.display = 'none';
    clientsPage.style.display = 'block';
    mapPage.style.display = 'none';
    main.style.textDecoration = 'none';
    clients.style.textDecoration = 'underline';
    mapOnSite.style.textDecoration = 'none';
}

function openMapPage(){
    mainPage.style.display = 'none';
    clientsPage.style.display = 'none';
    mapPage.style.display = 'block';
    main.style.textDecoration = 'none';
    clients.style.textDecoration = 'none';
    mapOnSite.style.textDecoration = 'underline';
}


let male = document.getElementById('male');
let female = document.getElementById('female');
let maxBalance = document.getElementById('maxBalance');

fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    .then(response => response.json())
    .then(result => {
        let arr = [];
        let maxNum = 0;
        let quantityMale = 0;
        let quantityFemale = 0;


        for(let i = 0; i<result.length; i++){
            let ul = document.createElement('ul');
            ul.setAttribute('id', `ul${i}`);
            clientsPage.append(ul);
            let li = document.createElement('li');
            li.innerHTML = result[i].name;
            ul.append(li);
            let li2 = document.createElement('li');
            li2.innerHTML = result[i].company;
            ul.append(li2);
            let li3 = document.createElement('li');
            li3.innerHTML = result[i].email;
            ul.append(li3);
            let li4 = document.createElement('li');
            li4.innerHTML = result[i].phone;
            ul.append(li4);
            let li5 = document.createElement('li');
            li5.innerHTML = result[i].balance;
            ul.append(li5);

            let liBtnDel = document.createElement('li');
            liBtnDel.style.listStyleType = 'none';
            liBtnDel.innerHTML = `<button onclick="userDel(${i})">Удалить пользователя</button>`;
            ul.append(liBtnDel);

            if(result[i].isActive == true){
                ul.style.backgroundColor ='lightblue';
            } else{
                ul.style.backgroundColor ='lightcoral';
            }


            let stringBalance = String(result[i].balance);
            let onlyNumBalance = stringBalance.replace(/[^.\d]/g, '');
            arr.push(+onlyNumBalance);


            if(result[i].gender == 'male'){
                quantityMale++;
                male.innerHTML = `Всего ${quantityMale} мальчиков`
            }else if(result[i].gender == 'female'){
                quantityFemale++;
                female.innerHTML = `Всего ${quantityFemale} девочек`
            }else{
                console.log('какого ты пола?');
            }
        }

        for(let j = 0; j<arr.length; j++){
            if(arr[j]>maxNum){
                maxNum = arr[j];
                maxBalance.innerHTML = `Максимальный баланс: \$${maxNum}`;
            }
        }
    })
    

function userDel(value){
    let userWantDel = confirm('Вы точно хотите удалить информацию о пользователе?');
    let ulUser = 'ul'+value;
    let deletedUser = document.getElementById(ulUser);
    if(userWantDel == true){
        deletedUser.parentNode.removeChild(deletedUser);
        alert('Данные успешно удалены');
        console.log(deletedUser);

    }
}
