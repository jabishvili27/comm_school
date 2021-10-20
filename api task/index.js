//1დაწერეთ ფუნქცია, რომელსაც გადავცემთ ფილმის
//სახელს და გვეტყვის რამდენი  წლის წინ გამოვიდა ეს ფილმი.
async function film(name) {
  let data = await fetch(`
    http://www.omdbapi.com/?t=${name}&apikey=15fb000e`);
  let dataa = await data.json();

  let today = new Date();
  let year = today.getFullYear();
  console.log(year - dataa.Year);
}
film("fast");
// 2. დაწერეთ ფუნქცია, რომელსაც გადავცემთ ფილმის სახელს და დაგვიბრუნებს ამ
//ფილმის მსახიობების სახელების მასივს (გვარების გარეშე)
async function film2(name) {
  let data = await fetch(`
    http://www.omdbapi.com/?t=${name}&apikey=15fb000e`);
  let dataa = await data.json();
  let firstname;
  let firstnamee;
  let arr = [];

  for (let i = 0; i < 3; i++) {
    firstname = dataa.Actors.split(",")[i];
    firstnamee = firstname.split(" ")[i];
    arr.push(firstnamee);
  }
  console.log(arr);
}
film2("fast"); //საიდანაც თქვენი  ერთერთი საყვარელი ფილმია. (თუ რამდენიმე ქვეყანაა
//3. დაწერეთ ფუნქცია, რომელიც დააბრუნებს იმ ქვეყნის ვალუტას,
//  ფილმზე მითითებული,  ავიღოთ პირველი)
async function film3(name) {
  let data = await fetch(`
        http://www.omdbapi.com/?t=${name}&apikey=15fb000e`);
  let dataa = await data.json();
  let Country;
  Country = dataa.Country.split(",")[0];
  console.log(Country);

  let qve = await fetch(`
            https://restcountries.com/v3.1/name/${Country}`);
  let qvee = await qve.json();
  console.log(qvee[0].currencies);
}
film3("fast");
/*    4. დაწერეთ ფუნქცია, რომელსაც გადავცემთ 3 ფილმის სახელს, და გვეტყვის 
    ჯამში რამდენი საათი და რამდენი წუთია ყველა ფილმის ხანგრძლივობა ერთად. */
async function film4(name, name2, name3) {
  let data = await fetch(`
    http://www.omdbapi.com/?t=${name}&apikey=15fb000e`);
  let dataa = await data.json();
  let data1 = await fetch(`
    http://www.omdbapi.com/?t=${name2}&apikey=15fb000e`);
  let dataa1 = await data1.json();
  let data2 = await fetch(`
    http://www.omdbapi.com/?t=${name3}&apikey=15fb000e`);
  let dataa2 = await data2.json();
  let c, a, b;
  c = parseInt(dataa.Runtime.split(" ")[0]);
  a = parseInt(dataa1.Runtime.split(" ")[0]);
  b = parseInt(dataa2.Runtime.split(" ")[0]);
  console.log(a + b + c + "min");
}
film4("fast", "madagascar", "taxi");
/*   5. დაწერეთ ფუნქცია, რომელსაც გადავცემთ 3 ფილმის სახელს, და დაგვიბრუნებს იმ 
    ქვეყნების მოსახლეობების ჯამს, საიდანაც ეს ფილმებია.
     (თუ რამდენიმე ქვეყანაა ფილმზე მითითებული, ავიღოთ პირველი) */
async function task5(film1, film2, film3) {
  let people1 = await getPopul(film1);
  let people2 = await getPopul(film2);
  let people3 = await getPopul(film3);
  console.log(people1 + people2 + people3);
}
async function getPopul(name) {
  let data = await fetch(`
        http://www.omdbapi.com/?t=${name}&apikey=15fb000e`);
  let dataa = await data.json();
  let a = dataa.Country.split(",")[0];
  let qve = await fetch(`
        https://restcountries.com/v3.1/name/${a}`);
  let qvee = await qve.json();
  return qvee[0].population;
}
task5("mery", "speed", "taxi");
