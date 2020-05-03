var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());


console.log(fullname); //John Doe
console.log(obj.fullname); //Colin Ihrig
console.log(obj.prop.fullname); //Aurelio De Rosa

var test1 = obj.prop.getFullname;

console.log(test1()); //undefined