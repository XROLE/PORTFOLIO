import mongoose from 'mongoose';
import Message from 'server/model/messages';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from 'server/app';

let should = chai.should();

chai.use(chaiHttp);

describe('Messages', () => {
    beforeEach((done) => {  //Empty the database
       Message.Message.remove({}, (err) => {
           done();
       }) 
    })
    describe('/GET getMessages', () => { // Testing the getMessages API
        chai.request(server)
            .get('/portfolio/views', )
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.equal(0);
                done();
            })
    })
})