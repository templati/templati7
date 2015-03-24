//Database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/templatis7');

//Unit under test
var Item = require('./../models/items');

//Assertion lirary
var expect = require('chai').expect;

//The tests
describe('Items model', function(){

	beforeEach(function(done){
		Item.remove(done);
	});

	afterEach(function(done){
		Item.remove(done);
	});

	it('Should save a new item', function(done){
		Item.create({
			name: 'Product template',
			slug: 'product-template'

		}, function(err, item){
			expect(err).to.not.exist;
			expect(item._id).to.exist;
			expect(item.name).to.equal('Product template');
			expect(item.slug).to.equal('product-template');
			// console.log(err,item);
			done();
		});
	}); 

	it('Should require a name', function(done){
		Item.create({
			slug: 'product-template'
		}, function(err,item){
			expect(err).to.exist;
			expect(String(err)).to.match(/is required/);
			done();
		});
	});

});
