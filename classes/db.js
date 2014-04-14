var mongoose = require( 'mongoose' ) || '';
var config = require( '../classes/config' ) || '';

module.exports = {
    init: function(){

        var Schema = mongoose.Schema;

        var User = new Schema({
            userId : String,
            password : String,
            role : String
        });

        mongoose.model('User', User);

        var Website = new Schema({
            htmlElement : [Schema.Types.Mixed],
            menuElement : [Schema.Types.Mixed],
            cmsAdmin : [String]
        }); //remark : no new page, only user care content

        mongoose.model('Website', Website);

        var Element = new Schema({
            name    : String,
            owner : String,
            html : String
        });

        mongoose.model('Element ', Element);

        mongoose.connect( config.database.connection_string )

    }
};