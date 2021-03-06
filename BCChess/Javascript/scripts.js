function Render(html)
{
    HTMLContainer.insertAdjacentHTML('beforeend',html);
}

var TimerHandle;
function StartTimer(ms)
{
    if (TimerHandle != null)
        StopTimer();
    TimerHandle = window.setInterval(TimerTic,ms);
}
function TimerTic()
{
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("TimerTic",[]);
}
function StopTimer()
{
    window.clearInterval(TimerHandle);
    TimerHandle = null;
}
function AttachClickTracker()
{
    window.parent.addEventListener('mousedown',KeyListen);
}
function KeyListen(event)
{
    for(var i = 0; i < event.path.length; i++)
    {
        var p = event.path[i];
        if (p.getAttribute('controlname'))
        {
            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ControlClicked",[p.getAttribute('controlname')]);
            return;
        }
    }
}
function SetBackground(control)
{
    var image = window.parent.document.querySelector("[controlname^='" + control + "']").querySelector(".imagecontrol");
    console.log(image);
    image.setAttribute('style','background-color: lightgrey !important;');
}