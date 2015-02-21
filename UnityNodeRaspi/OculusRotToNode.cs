using UnityEngine;
using System.Collections;
using WebSocketSharp;

public class OculusRotToNode : MonoBehaviour {
	private WebSocket ws;

	private GameObject OculusCenter;
	//private float OculusRot_x = 1.0f;
	private float OculusRot_y = 1.0f;

	// Use this for initialization
	void Start () {
		OculusCenter = GameObject.Find("CenterEyeAnchor");
	}
	
	// Update is called once per frame
	void Update () {
		this.ws = new WebSocket("ws://192.168.1.98:8124");
		this.ws.OnMessage += (object sender, MessageEventArgs e) =>
		{
			print(e.Data);
		};
		this.ws.Connect();

		//OculusRot_x = OculusCenter.transform.eulerAngles.x;
		OculusRot_y = OculusCenter.transform.eulerAngles.y;

		/*string x_rot;
		x_rot = (OculusRot_x).ToString();
		this.ws.Send ("x : " + x_rot);*/

		string y_rot;
		 y_rot = (OculusRot_y).ToString();
		this.ws.Send ("y : " + y_rot);
		
	}
}