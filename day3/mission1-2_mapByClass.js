//클래스 선언문
class MapFunction {
    //생성자(constructor) : constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다. constructor는 클래스 내에 최대 한 개만 존재할 수 있고 생략할 수 있다. constructor 내부에서 return 문은 반드시 생략한다.
    constructor() {
        //인스턴스 생성 및 초기화
        this.myMap = new Object();
    }

    //프로토타입 메서드 : 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식(ex, 클래스명.prototype.메서드명 = function() {)과 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도(메서드명() { ) 기본적으로 프로토타입 메서드가 된다.
    put(key, value) {
        this.myMap[key] = value;
    }
    remove(key) {
        delete this.myMap[key];
    }
    containsKey(key) {
        return Reflect.has(this.myMap, key);
    }
    containsValue(value) {
        return Object.keys(this.myMap || []).includes(value);
    }
    get(key) {
        return this.myMap[key];
    }
    isEmpty() {
        return Array.from(Object.keys(this.myMap || [])).length === 0;
    }
    keys() {
        return Object.keys(this.myMap || []);
    }
    replace(key, value) {
        this.myMap[key] = value;
    }
    values() {
        return Object.values(this.myMap || []);
    }
    size() {
        return Array.from(Object.keys(this.myMap || [])).length;
    }
    clear() {
        delete this.myMap;
    }

    //정적(static) 메서드 : 인스턴스를 생성하지 않아도 호출할 수 있는 메서드이다. 클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다. 정적 메서드는 프로토타입 메서드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.

    static sayHello() {
        console.log('Hello');
    }
}

//인스턴스 생성
const capitalMap = new MapFunction();
console.log(capitalMap);

//프로토타입 메서드 호출
capitalMap.put('대한민국', '서울');
capitalMap.put('일본', '오사카');
capitalMap.put('중국', '베이징');
capitalMap.put('베트남', '하노이');
capitalMap.put('영국', '런던');

console.log('keys() : ', capitalMap.keys());
console.log('values() : ', capitalMap.values());

console.log('containsKey("중국") : ', capitalMap.containsKey('중국'));

console.log('@실행@ remove("중국")');
capitalMap.remove('중국');
console.log('keys() : ', capitalMap.keys());
console.log('values() : ', capitalMap.values());
console.log('containsKey("중국") : ', capitalMap.containsKey('중국'));

console.log('isEmpty() : ', capitalMap.isEmpty());

console.log('@실행@ replace("일본", "도쿄")');
capitalMap.replace('일본', '도쿄');

console.log('get("일본") : ', capitalMap.get('일본'));
console.log('size() : ', capitalMap.size());

console.log('@실행@ clear() ');
capitalMap.clear();

console.log('keys() : ', capitalMap.keys());
console.log('isEmpty() : ', capitalMap.isEmpty());

// capitalMap.sayHello();  //TypeError: capitalMap.sayHello is not a function
//정적 메서드 호출, 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
MapFunction.sayHello(); //"Hello"