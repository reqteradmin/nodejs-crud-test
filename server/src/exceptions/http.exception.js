
class HttpException extends Error{
    message;
    statusCode;
    constructor(message,code){
        super(message);
        this.message = message;
        this.statusCode = code;
    }

}