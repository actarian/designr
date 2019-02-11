/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ControlBase } from './control-base';
export class ControlSelect extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'select';
        this.options = [];
        this.options = options.options || [];
    }
}
if (false) {
    /** @type {?} */
    ControlSelect.prototype.schema;
    /** @type {?} */
    ControlSelect.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1zZWxlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBbUI7Ozs7SUFLckQsWUFBWSxVQUFzQyxFQUFFO1FBQ25ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUpoQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFlBQU8sR0FBcUMsRUFBRSxDQUFDO1FBSTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNEOzs7SUFQQSwrQkFBa0I7O0lBQ2xCLGdDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMgfSBmcm9tICcuL2NvbnRyb2wtYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sU2VsZWN0IGV4dGVuZHMgQ29udHJvbEJhc2U8c3RyaW5nPiB7XG5cblx0c2NoZW1hID0gJ3NlbGVjdCc7XG5cdG9wdGlvbnM6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdID0gW107XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogQ29udHJvbEJhc2VPcHRpb25zPHN0cmluZz4gPSB7fSkge1xuXHRcdHN1cGVyKG9wdGlvbnMpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnMub3B0aW9ucyB8fCBbXTtcblx0fVxufVxuIl19