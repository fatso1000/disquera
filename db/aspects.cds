namespace app.aspects;

using {
    User,
    managed
} from '@sap/cds/common';


aspect GrabacionesAspect : managed {
    user : User;
}
