const dataEvento = new Date('Sep 23, 2023 19:00:00');
const timestampEvento = dataEvento.getTime();

const contahoras = setInterval(function(){
    const agora = new Date();
    const timestampAtual = agora.getTime();

    const diaemms = 1000 * 60 * 60 * 24;
    const horaemms = 1000 * 60 * 60;
    const minutoemms = 1000 * 60;

    const distanciaEvento = timestampEvento - timestampAtual;
    const diasateEvento = Math.floor(distanciaEvento / diaemms);
    const horasEvento = Math.floor((distanciaEvento % diaemms) / horaemms);
    const minutosEvento = Math.floor((distanciaEvento % horaemms) / minutoemms);
    const segundosEvento = Math.floor((distanciaEvento % minutoemms) / 1000);
    document.getElementById('contador').innerHTML = `${diasateEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;
}, 1000)