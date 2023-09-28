// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../..';
import * as __ from './../../_';
// the following represents the CDS aspect 'GrabacionesAspect'
export function _GrabacionesAspectAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class GrabacionesAspect extends Base {
    /**
    * Canonical user ID
    */
        user?: _.User;
    static actions: {
    }
  };
}
export class GrabacionesAspect extends _._managedAspect(_GrabacionesAspectAspect(__.Entity)) {}