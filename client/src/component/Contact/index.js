import React from 'react';
import './Contact.css';

import QuickLinks from '../QuickLinks';

class bananas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="newsTitle col-sm-12">Contact MusicHub</div>
					<hr />
				</div>

				<div className="row">
					<div className="col-sm-2">
						<QuickLinks />
					</div>

					<div class="col-md-3">
						<span class="et_pb_image_wrap">
							<img
								className="contactUsImage"
								src="https://awg2020.org/wp-content/uploads/2018/10/message.png"
								alt=""
							/>
						</span>

						<p>shaw.branford@gmail.com</p>
					</div>

					<div class="col-md-3">
						<span class="et_pb_image_wrap">
							<img
								className="contactUsImage"
								src="https://awg2020.org/wp-content/uploads/2018/10/mapi.png"
								alt=""
							/>
						</span>
						<p>Washington, D.C.</p>
					</div>

					<div class="col-md-3">
						<span class="et_pb_image_wrap">
							<img
								className="contactUsImage"
								src="https://awg2020.org/wp-content/uploads/2018/10/teleph.png"
								alt=""
							/>
						</span>
						<p>(615) 715-5862</p>
					</div>
				</div>
			</div>
		);
	}
}

export default bananas;
