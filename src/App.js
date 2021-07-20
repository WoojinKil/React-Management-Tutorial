import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers= [{
  'id' : 1,
  'image' : 'http://palcing.com/64/64/1',
  'name' : '길우진',
  'birthday': '951102',
  'job' : '대학생',
  'gender' : '남자'

},
{
  'id' : 2,
  'image' : 'http://palcing.com/64/64/2',
  'name' : '길우진2',
  'birthday': '931123',
  'job' : '대학생1',
  'gender' : '남자'

},
{
  'id' : 3,
  'image' : 'http://palcing.com/64/64/3',
  'name' : '길우진3',
  'birthday': '670306',
  'job' : '주부',
  'gender' : '여자'

}
]
function App() {
  return (
    <div>
          {


            customers.map(c=>{
              return(
          <Customer
          name ={c.name}
          id = {c.id}
          image = {c.image}
          birthday ={c.birthday}
          job ={c.job}
          gender ={c.gender}
              />
              );
            })
          }
          



    </div>
        
  );
}

export default App;
