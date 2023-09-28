namespace sap.capire.disquera;

using {
    cuid,
    Country,
    managed,
    User
} from '@sap/cds/common';

using {app.aspects} from './aspects';

entity Musicos {
    key ID       : Integer;
        active   : Boolean;
        nombre   : String;
        apellido : String;
        bandas   : Composition of many Musicos2Bandas
                       on bandas.musico = $self;
}

entity Bandas {
    key ID      : Integer;
        nombre  : String;
        genero  : String;
        musicos : Composition of many Musicos2Bandas
                      on musicos.banda = $self;
        discos  : Association to many Bandas2Discos
                      on discos.banda = $self;
}

entity Musicos2Bandas : cuid {
    key musico : Association to Musicos;
    key banda  : Association to Bandas;
}

entity Bandas2Discos : cuid {
    key banda : Association to Bandas;
    key disco : Association to Discos;
}

entity Discos {
    key ID                   : Integer;
        nombre               : String;
        numeroCanciones      : Integer;
        banda                : Composition of Bandas2Discos
                                   on banda.disco = $self;
        centroDistribuciones : Composition of many CentrosDistribucion
                                   on centroDistribuciones.discos = $self;
        grabaciones          : Composition of Grabaciones
                                   on grabaciones.disco = $self;
}

entity Grabaciones : aspects.GrabacionesAspect {
    key ID        : Integer;
        horas     : Integer;
        promocion : Boolean default false;
        musico    : Association to Musicos;
        disco     : Association to Discos;
}

entity CentrosDistribucion {
    key ID     : Integer;
        nombre : String;
        discos : Association to many Discos;
}
