import { ControlOption } from '../control-option';
export class ControlEmail extends ControlOption {
    constructor() {
        super(...arguments);
        this.schema = 'email';
        this.pattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1lbWFpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbC9lbWFpbC9jb250cm9sLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQXFCO0lBQXZEOztRQUNDLFdBQU0sR0FBVyxPQUFPLENBQUM7UUFHekIsWUFBTyxHQUFxQixxREFBcUQsQ0FBQztJQUNuRixDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sT3B0aW9uIH0gZnJvbSAnLi4vY29udHJvbC1vcHRpb24nO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbEVtYWlsIGV4dGVuZHMgQ29udHJvbE9wdGlvbjxzdHJpbmc+IHtcblx0c2NoZW1hOiBzdHJpbmcgPSAnZW1haWwnO1xuXHRtaW5sZW5ndGg/OiBudW1iZXI7XG5cdG1heGxlbmd0aD86IG51bWJlcjtcblx0cGF0dGVybj86IHN0cmluZyB8IFJlZ0V4cCA9ICdbYS16QS1aMC05Li1fXXsxLH1AW2EtekEtWi4tXXsyLH1bLl17MX1bYS16QS1aXXsyLH0nO1xufVxuIl19