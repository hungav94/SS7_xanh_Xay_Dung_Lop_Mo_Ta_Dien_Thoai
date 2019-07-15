let Mobile = function (name, batery, inbox, outbox, index) {
    this.name = name;
    this.batery = batery;
    this.inbox = inbox;
    this.outbox = outbox;
    this.index = index;

    let area = document.getElementById('area' + this.index);
    let turn = document.getElementById('turn' + this.index);
    this.turnOnOff = function () {
        if (turn.value == 'Bật') {
            turn.value = 'Tắt';
        } else if (turn.value == 'Tắt') {
            turn.value = 'Bật';
        }
    };
    this.status = function () {
        if (turn.value == 'Bật') {
            if (this.batery > 0) {
                area.placeholder = this.batery + '%';
                area.readOnly = true;
                this.batery--;
            } else {
                area.value = 'Hết pin';
                area.disabled = true;
            }
        } else {
            area.value = 'Điện thoại chưa bật';
            area.readOnly = false;
        }
    };
    this.texting = function () {
        if (turn.value == 'Bật') {
            if (this.batery > 0) {
                area.value = '';
                area.placeholder = 'Soạn tin nhắn';
                area.readOnly = false;
                this.batery--;
            } else {
                area.value = 'Hết pin';
                area.disabled = true;
            }
        } else {
            area.value = 'Điện thoại chưa bật';
            area.readOnly = false;
        }
    };
    this.sendMessage = function () {
        if (turn.value == 'Bật') {
            if (this.batery > 0) {
                if (area.value != '') {
                    this.outbox.push(area.value);
                    area.value = '';
                }
                this.batery--;
            } else {
                area.value = 'Hết pin';
                area.disabled = true;
            }
        } else {
            area.value = 'Điện thoại chưa bật';
            area.readOnly = false;
        }
    };
    this.checkOutbox = function () {
        if (turn.value == 'Bật') {
            if (this.batery > 0) {
                area.value = '';
                area.placeholder = 'Hộp thư đi';
                area.readOnly = true;
                for (let i = 0; i < this.outbox.length; i++) {
                    area.value += this.outbox[i];
                }
                this.batery--;
            } else {
                area.value = 'Hết pin';
                area.disabled = true;
            }
        } else {
            area.value = 'Điện thoại chưa bật';
            area.readOnly = false;
        }
    };
    this.checkInbox = function () {
        if (turn.value == 'Bật') {
            if (this.batery > 0) {
                area.value = '';
                area.placeholder = 'Hộp thư đến';
                area.readOnly = true;
                for (let i = 0; i < this.inbox.length; i++) {
                    area.value += this.inbox[i] + '\n\n';
                }
                this.batery--;
            } else {
                area.value = 'Hết pin';
                area.disabled = true;
            }
        } else {
            area.value = 'Điện thoại chưa bật';
            area.readOnly = false;
        }
    };

};