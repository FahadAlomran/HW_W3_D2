
interface User {
    [key: string]: any
    age: number,
    name: string,
    occupation: string,
}

let persons: users[] = [
    { age: 28, name: "Ahamd", occupation: "one" },
    { age: 22, name: "Fahad", occupation: "two" },
    { age: 45, name: "Ali", occupation: "three" },
    { age: 35, name: "Saed", specialty: "React" },
    { age: 22, name: "Norah", specialty: "SQL" },
    { age: 18, name: "mohmaed", specialty: "PHP" }
]


function print(x){
    for(const x of persons){
        console.log(x)
    }
 }

 print(persons)

 interface Admin{
    [key: string]: any
    age: number,
    name: string,
    specialty: string
  }

  type users = User | Admin
 

  function check(person){
    for(const x of person){
        if("occupation" in x){
           console.log(`User: Name:${x.name}, Age:${x.age}, Occupation:${x.occupation}`)
        }else{
           console.log(`Admin: Name:${x.name}, Age:${x.age}, Occupation:${x.specialty}`)
        }
    }
}
check(persons)


function change(name: string, age: number){
    for(const x of persons){
        if(x.name == name){
            x.age = age
        }
    }
    console.log(persons)
 }
 
 change("Fahad", 55)