@component('mail::message')

Prejeli ste novo sporočilo preko kontaktnega obrazca.

**Ime in priimek:**
{{ $data['name'] }}<br><br>
**Email:** {{ $data['email'] }}<br><br>
**Telefonska št.:** {{ $data['phone'] }}<br><br>
**Sporočilo:**<br>
{{ $data['message'] }}
@endcomponent
