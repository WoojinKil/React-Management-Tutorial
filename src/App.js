import logo from './logo.svg';
import Customer from './components/Customer'
import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme=>({
  root : {
    width : '100%',
    marginTop: theme.spacing.unit*3,
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
})

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
//function App()
class App extends Component{
render(){
  const { classes } = this.props;
  return (
    <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>


                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>셍년월일</TableCell>
                <TableCell>직업</TableCell>
                <TableCell>성별</TableCell>
              </TableRow>


            </TableHead>

            <TableBody>

            {customers.map(c=>{return(<Customer id = {c.id} image = {c.image} name ={c.name}  birthday ={c.birthday}  job ={c.job}   gender ={c.gender}/>
              );
            })
          }

            </TableBody>
          </Table>
          



    </Paper>
        
  );
}

}

export default withStyles(styles) (App);
