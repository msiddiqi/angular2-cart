"use strict";
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var router_state_1 = require('./router_state');
var tree_1 = require('./utils/tree');
function createRouterState(curr, prevState) {
    var root = createNode(curr._root, prevState ? prevState._root : undefined);
    var queryParams = prevState ? prevState.queryParams : new BehaviorSubject_1.BehaviorSubject(curr.queryParams);
    var fragment = prevState ? prevState.fragment : new BehaviorSubject_1.BehaviorSubject(curr.fragment);
    return new router_state_1.RouterState(root, queryParams, fragment, curr);
}
exports.createRouterState = createRouterState;
function createNode(curr, prevState) {
    if (prevState && equalRouteSnapshots(prevState.value.snapshot, curr.value)) {
        var value = prevState.value;
        value._futureSnapshot = curr.value;
        var children = createOrReuseChildren(curr, prevState);
        return new tree_1.TreeNode(value, children);
    }
    else {
        var value = createActivatedRoute(curr.value);
        var children = curr.children.map(function (c) { return createNode(c); });
        return new tree_1.TreeNode(value, children);
    }
}
function createOrReuseChildren(curr, prevState) {
    return curr.children.map(function (child) {
        var index = prevState.children.findIndex(function (p) { return equalRouteSnapshots(p.value.snapshot, child.value); });
        if (index >= 0) {
            return createNode(child, prevState.children[index]);
        }
        else {
            return createNode(child);
        }
    });
}
function createActivatedRoute(c) {
    return new router_state_1.ActivatedRoute(new BehaviorSubject_1.BehaviorSubject(c.url), new BehaviorSubject_1.BehaviorSubject(c.params), c.outlet, c.component, c);
}
function equalRouteSnapshots(a, b) {
    return a._routeConfig === b._routeConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3JvdXRlcl9zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVfcm91dGVyX3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVyRCw2QkFBdUYsZ0JBQWdCLENBQUMsQ0FBQTtBQUN4RyxxQkFBdUIsY0FBYyxDQUFDLENBQUE7QUFFdEMsMkJBQWtDLElBQXlCLEVBQUUsU0FBc0I7SUFDakYsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDN0UsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RixJQUFNLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUxlLHlCQUFpQixvQkFLaEMsQ0FBQTtBQUVELG9CQUFvQixJQUFzQyxFQUFFLFNBQW9DO0lBRTlGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDOUIsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRW5DLElBQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxlQUFRLENBQWlCLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV2RCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFNLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksZUFBUSxDQUFpQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztBQUNILENBQUM7QUFFRCwrQkFDSSxJQUFzQyxFQUFFLFNBQW1DO0lBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7UUFDNUIsSUFBTSxLQUFLLEdBQ1AsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztRQUMxRixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCw4QkFBOEIsQ0FBeUI7SUFDckQsTUFBTSxDQUFDLElBQUksNkJBQWMsQ0FDckIsSUFBSSxpQ0FBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLGlDQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBRUQsNkJBQTZCLENBQXlCLEVBQUUsQ0FBeUI7SUFDL0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGUsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJy4vcm91dGVyX3N0YXRlJztcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXJTdGF0ZShjdXJyOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBwcmV2U3RhdGU6IFJvdXRlclN0YXRlKTogUm91dGVyU3RhdGUge1xuICBjb25zdCByb290ID0gY3JlYXRlTm9kZShjdXJyLl9yb290LCBwcmV2U3RhdGUgPyBwcmV2U3RhdGUuX3Jvb3QgOiB1bmRlZmluZWQpO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHByZXZTdGF0ZSA/IHByZXZTdGF0ZS5xdWVyeVBhcmFtcyA6IG5ldyBCZWhhdmlvclN1YmplY3QoY3Vyci5xdWVyeVBhcmFtcyk7XG4gIGNvbnN0IGZyYWdtZW50ID0gcHJldlN0YXRlID8gcHJldlN0YXRlLmZyYWdtZW50IDogbmV3IEJlaGF2aW9yU3ViamVjdChjdXJyLmZyYWdtZW50KTtcbiAgcmV0dXJuIG5ldyBSb3V0ZXJTdGF0ZShyb290LCBxdWVyeVBhcmFtcywgZnJhZ21lbnQsIGN1cnIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGN1cnI6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LCBwcmV2U3RhdGU/OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4pOlxuICAgIFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPiB7XG4gIGlmIChwcmV2U3RhdGUgJiYgZXF1YWxSb3V0ZVNuYXBzaG90cyhwcmV2U3RhdGUudmFsdWUuc25hcHNob3QsIGN1cnIudmFsdWUpKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmV2U3RhdGUudmFsdWU7XG4gICAgdmFsdWUuX2Z1dHVyZVNuYXBzaG90ID0gY3Vyci52YWx1ZTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gY3JlYXRlT3JSZXVzZUNoaWxkcmVuKGN1cnIsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIG5ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4odmFsdWUsIGNoaWxkcmVuKTtcblxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhbHVlID0gY3JlYXRlQWN0aXZhdGVkUm91dGUoY3Vyci52YWx1ZSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjdXJyLmNoaWxkcmVuLm1hcChjID0+IGNyZWF0ZU5vZGUoYykpO1xuICAgIHJldHVybiBuZXcgVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+KHZhbHVlLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT3JSZXVzZUNoaWxkcmVuKFxuICAgIGN1cnI6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LCBwcmV2U3RhdGU6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlPikge1xuICByZXR1cm4gY3Vyci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID1cbiAgICAgICAgcHJldlN0YXRlLmNoaWxkcmVuLmZpbmRJbmRleChwID0+IGVxdWFsUm91dGVTbmFwc2hvdHMocC52YWx1ZS5zbmFwc2hvdCwgY2hpbGQudmFsdWUpKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoY2hpbGQsIHByZXZTdGF0ZS5jaGlsZHJlbltpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlTm9kZShjaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aXZhdGVkUm91dGUoYzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICByZXR1cm4gbmV3IEFjdGl2YXRlZFJvdXRlKFxuICAgICAgbmV3IEJlaGF2aW9yU3ViamVjdChjLnVybCksIG5ldyBCZWhhdmlvclN1YmplY3QoYy5wYXJhbXMpLCBjLm91dGxldCwgYy5jb21wb25lbnQsIGMpO1xufVxuXG5mdW5jdGlvbiBlcXVhbFJvdXRlU25hcHNob3RzKGE6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIGI6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEuX3JvdXRlQ29uZmlnID09PSBiLl9yb3V0ZUNvbmZpZztcbn0iXX0=