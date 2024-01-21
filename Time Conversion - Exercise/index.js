function timeConversion(s) {
    //transforma o s em string dentro de um array
    s.split('')
    
    //juntando os algarismos e excluindo o AM/PM
    let hours = parseInt(s[0] + s[1]); //parseInt() força o numero a ser um inteiro
    let minutes = s[3] + s[4];
    let seconds = s[6] +s[7];
    let ampm = s[s.length - 2];
    
    //modificando para as 24horas
    if(hours >= 12 && ampm === 'A'){
      hours = hours - 12
      return (hours + ":" + minutes + ":" + seconds)
    }
    else if(hours <= 12 && ampm === 'A'){
      return (hours + ":" + minutes + ":" + seconds)
    }
    else if(hours >= 12 && ampm === 'P'){
      return (hours + ":" + minutes + ":" + seconds)
    }
    else if(hours <= 12 && ampm === 'P'){
      hours = hours + 12
      return (hours + ":" + minutes + ":" + seconds)
    }
  }
  console.log(timeConversion('07:40:30PM'))
  console.log(timeConversion('19:30:00AM'))