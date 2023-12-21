import { sign } from 'jsonwebtoken';
var token = sign({ foo: 'bar' }, 'shhhhh');


var decoded  = jwt.verify(token, 'shhhhh');