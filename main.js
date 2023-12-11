
let employees = [];

class Employee{
    constructor(name, email, age, salary, phone, address){
        this.name = name;
        this.email = email;
        this.age = age;
        this.salary = salary;
        this.phone = phone;
        this.address = address;
    }

    create(){ // it is same if I do it => create(name, email, age, salary, phone, address){...}
        let employeeInfo = {
            name: this.name,
            email: this.email,
            age: this.age,
            salary: this.salary,
            phone: this.phone,
            address: this.address,
        };

        employees.push(employeeInfo);
    }

    update(index, prop, value){
        if(index > 0 && index <= employees.length){
            employees[--index][prop] = value;
        } else{
            console.log('Updating Faild, please try again...\n');
        }
    }

    delete(index){
        if(index > 0 && index <= employees.length){
            employees.splice(--index,1);
        }else{
            console.log('Deleting Faild, please try again...\n');
        }
    }
    show_all(){
        employees.map((user,index)=>{
            console.log(`Employee index ${++index}`);
            console.log(`Employee Name : ${user.name}`);
            console.log(`Employee Email : ${user.email}`);
            console.log(`Employee age : ${user.age}`);
            console.log(`Employee Salary : ${user.salary}`);
            console.log(`Employee phone_number : ${user.phone}`);
            console.log(`Employee Address : ${user.address}`);
            console.log('\n--------------------------------------\n');
        })
    }
}

let userOne = new Employee('Mariem Abdalwahab', 'mariem@gmail.com',20,'9500','011215669220','mansoura');
let userTwo = new Employee('Salwa Saad', 'salwa@gmail.com',30,'6500','056164865','Cairo');
let userThree = new Employee('Fatma Ahmwd', 'fatma@gmail.com',25,'9600','654645046464','Giza');

userOne.create();
userTwo.create();
userThree.create(); // now employees array full of three employees

userTwo.update(2, 'salary', '7000'); // one indexed for user but i hndel it in update function => --index
userThree.delete(5) // one indexed also
userThree.show_all();

console.log(employees);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Book{
    constructor(name, author, num_pages, publish_date){
        this.name = name;
        this.author = author;
        this.num_pages = num_pages;
        this.publish_date = publish_date;
        this.bookInfo = []; // here I used another way => each book has his own array of object I think this is beteer
    }

    create(){
        let details = {
            name: this.name,
            author: this.author,
            num_pages: this.num_pages,
            publish_date:this.publish_date,
        };
        this.bookInfo.push(details);
    }

    update(prop, value){
        this.bookInfo[0][prop] = value;
    }

    delete(){
        this.bookInfo.splice(0,1);
    }

    show_all(){
        if(this.bookInfo.length == 0){
            console.log('This book is deleted');
        }

        for(let prop in this.bookInfo[0]){
            console.log(`Book ${prop}: ${this.bookInfo[0][prop]} `);
        };
        console.log('\n');
   
    }
}


let bookOne = new Book('Book', 'I am the author Name', 150, '2021');
let bookTwo = new Book('BookBook', 'I am the author Name tow', 200, '2023');

bookOne.create();
bookTwo.create();

bookOne.update('author', 'My name is updated?!!!!');
bookOne.show_all()
bookOne.delete();
bookOne.show_all()
bookTwo.show_all()


















