module.exports = function(io) {

    io.on('connection', function (socket) {
        socket.on('asker', function(data) {
            // console.log("teacher",data);
            // io.emit('teacher', data);
        });
    });
};