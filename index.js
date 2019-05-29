const mongoose=require('mongoose');

const express = require('express');
const app=express();

const commentSchema = mongoose.Schema ({
	title: {type:String, required:true},
	body: {type:String, required: true},
	createdAt:{type:Date, default: Date.now},
});

commentSchema.methods.getTitle=function(){
	return this.title;
};

const Comment=mongoose.model('comment', commentSchema);

mongoose.connect('mongodb://localhost:27017/social', {useNewUrlParser: true});
/*mongoose.connect(conifgDB.url, {useNewUrlParser: true},
	function(err){
		if(err){
			console.log(err);
			return;
		}
		app.listen(3000);
	}
);
*/
