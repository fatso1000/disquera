// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';
import * as _ from './../../..';
import * as _app_aspects from './../../../app/aspects';
export function _MusicoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Musico extends Base {
        ID?: number;
        active?: boolean;
        nombre?: string;
        apellido?: string;
        bandas?: __.Composition.of.many<Musicos2Bandas>;
        bandas_ID?: string;
        bandas_musico_ID?: number;
        bandas_banda_ID?: number;
    static actions: {
    }
  };
}
export class Musico extends _MusicoAspect(__.Entity) {}
export class Musicos extends Array<Musico> {}

export function _BandaAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Banda extends Base {
        ID?: number;
        nombre?: string;
        genero?: string;
        musicos?: __.Composition.of.many<Musicos2Bandas>;
        musicos_ID?: string;
        musicos_musico_ID?: number;
        musicos_banda_ID?: number;
        discos?: __.Association.to.many<Bandas2Discos>;
        discos_ID?: string;
        discos_banda_ID?: number;
        discos_disco_ID?: number;
    static actions: {
    }
  };
}
export class Banda extends _BandaAspect(__.Entity) {}
export class Bandas extends Array<Banda> {}

export function _Musicos2BandaAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Musicos2Banda extends Base {
        musico?: __.Association.to<Musico>;
        musico_ID?: number;
        banda?: __.Association.to<Banda>;
        banda_ID?: number;
    static actions: {
    }
  };
}
export class Musicos2Banda extends _._cuidAspect(_Musicos2BandaAspect(__.Entity)) {}
export class Musicos2Bandas extends Array<Musicos2Banda> {}

export function _Bandas2DiscoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Bandas2Disco extends Base {
        banda?: __.Association.to<Banda>;
        banda_ID?: number;
        disco?: __.Association.to<Disco>;
        disco_ID?: number;
    static actions: {
    }
  };
}
export class Bandas2Disco extends _._cuidAspect(_Bandas2DiscoAspect(__.Entity)) {}
export class Bandas2Discos extends Array<Bandas2Disco> {}

export function _DiscoAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Disco extends Base {
        ID?: number;
        nombre?: string;
        numeroCanciones?: number;
        banda?: __.Composition.of<Bandas2Disco>;
        banda_ID?: string;
        banda_banda_ID?: number;
        banda_disco_ID?: number;
        centroDistribuciones?: __.Composition.of.many<CentrosDistribucion_>;
        centroDistribuciones_ID?: number;
        grabaciones?: __.Composition.of<Grabacione>;
        grabaciones_ID?: string;
    static actions: {
    }
  };
}
export class Disco extends _DiscoAspect(__.Entity) {}
export class Discos extends Array<Disco> {}

export function _GrabacioneAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Grabacione extends Base {
        horas?: number;
        promocion?: boolean;
        musico?: __.Association.to<Musico>;
        musico_ID?: number;
        disco?: __.Association.to<Disco>;
        disco_ID?: number;
    static actions: {
    }
  };
}
export class Grabacione extends _app_aspects._GrabacionesAspectAspect(_._cuidAspect(_GrabacioneAspect(__.Entity))) {}
export class Grabaciones extends Array<Grabacione> {}

export function _CentrosDistribucionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CentrosDistribucion extends Base {
        ID?: number;
        nombre?: string;
        discos?: __.Association.to.many<Discos>;
        discos_ID?: number;
    static actions: {
    }
  };
}
export class CentrosDistribucion extends _CentrosDistribucionAspect(__.Entity) {}
export class CentrosDistribucion_ extends Array<CentrosDistribucion> {}
