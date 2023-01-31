  fetch("https://api.unsplash.com/photos/random?client_id=ylIGEfay_tPgaPpF6rr5AjJVmCBX2PqeQUx0mNT3EdI&orientation=landscape&query=nature")
  .then(res => {
    if(!res.ok) {
      throw Error("Something went wrong")
    }
    return res.json()
  })
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
  })
    .catch(err => {
      document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1572099606223-6e29045d7de3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDQ3MTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzUxMzA5MzI&ixlib=rb-4.0.3&q=80")`
    })
      fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`)
        .then(res => {
          if(!res.ok) {
            throw Error("Something went wrong")
          }
          return res.json()
        })
        .then(data => {
          document.getElementById("crypto-top").innerHTML = `
          <img src=${data.image.small} />
          <span>${data.name}</span>
          `
          document.getElementById("crypto").innerHTML += `
            <p><i class="fa-solid fa-right-long"></i> ${data.market_data.current_price.pln} PLN</p>
            <p><i class="fa-solid fa-arrow-trend-up"></i> ${data.market_data.high_24h.pln} PLN</p>
            <p><i class="fa-solid fa-arrow-trend-down"></i> ${data.market_data.low_24h.pln} PLN</p>
          `
        })
    .catch(err => console.error(err))

    function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }

    setInterval(getCurrentTime, 1000)

    const myPosition = navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=a1998a2016a28c43b0dcc3d8aa7af177`)
        .then(res => {
          if(!res.ok) {
            throw Error("Weather data not available")
          }
          return res.json()
        })
        .then(data => {
          document.getElementById("weather").innerHTML = `
            <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png />
            <p class="weather-temp">${Math.round(data.main.temp)}°C</p>
            <p class="weather-city">${data.name}</p>
          `
        })
        .catch(err => console.error(err))
    })
