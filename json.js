$(document).ready(function () {
    $.ajax({
        url: 'https://freefakeapi.io/api#get',
        method: 'GET',
        success: function(data) {
            console.log(data);

            $.ajax({
                url: 'https://freefakeapi.io/api#posts',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    title: 'Új Post Címe',
                    body: 'Ez a post tartalma.',
                    userId: 1
                }),
                success: function(data) {
                    console.log('Post létrehozva:', data);

                    $.ajax({
                        url: 'https://freefakeapi.io/api#posts/1',
                        method: 'PATCH',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            title: 'Módosított Post Címe'
                        }),
                        success: function(data) {
                            console.log('Post módosítva:', data);
                        },
                        error: function(error) {
                            console.error('Hiba történt a PATCH kérésnél:', error);
                        }
                    });
                },
                error: function(error) {
                    console.error('Hiba történt a POST kérésnél:', error);
                }
            });
        },
        error: function(error) {
            console.error('Hiba történt a GET kérésnél:', error);
        }
    });
});
