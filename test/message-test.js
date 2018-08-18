import mongoose from 'mongoose';
import Message from '../server/model/messages';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';

let should = chai.should();

chai.use(chaiHttp);

describe('Messages', () => {
    beforeEach((done) => {  //============================================== Empty the database
       Message.remove({}, (err) => {
           done();
       }) 
    });
    describe('/POST postMessages', () => {//================================ postMessage test snippet
        it('should add a message to the database succesfuly', (done) => {
            let newMessage = {
                email:'test@gmail.com',
                name: 'Post Test',
                message: 'This is just for testing purpose. Nothing more.'
            }
            chai.request(server)
              .post('/portfolio/views')
              .send(newMessage)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('success').equal('Message sent succesfuly');
                //   res.body.should.have.property('email');
                //   res.body.should.have.property('name');
                //   res.body.should.have.property('message');
            done();
            });
        });
    });
    describe('/GET getMessages', () => { //========================= getMessages test snippet
        it('should return all the messages in the database', (done) => {
            chai.request(server)
              .get('/portfolio/views')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.equal(0);
                done();
            });
        });        
    });    
});


